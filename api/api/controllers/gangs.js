module.exports = () => {
    const Enmap = require("enmap");
    //const gangPageDB = require('../data/customer-wallets.json');

    const gangs = new Enmap({
        name: "gangs"
    })

    let listGang = []
    gangs.forEach(gang => {
        if (gang.nome != undefined) {
            if (gang.cor == 0)
                gang.cor = '#000000'
                
            if (gang.cor.indexOf('0x') > -1) {
                gang.cor = gang.cor.slice(2)
                if (gang.cor == "vermelho")
                    gang.cor = 'F93A2F'
                if (gang.cor == "roxo")
                    gang.cor = 'A652BB'
                if (gang.cor == 'verde')
                    gang.cor = '00D166'
                    //...

                if (gang.cor.indexOf("#") < 0)
                    gang.cor = "#" + gang.cor
            }

            if (gang.icone == '')
                gang.icone = 'https://cdn.discordapp.com/attachments/531174573463306240/821378668327600179/placeholder.png'

            listGang.push(gang)
        }


    })

    const controller = {};

    controller.listGangs = (req, res) => res.status(200).json(listGang);

    controller.getGang = (req, res) => {
        console.log(req.query.search)
        let listGangs = []
        let search = req.query.search.toString().toLowerCase()

        gangs.forEach((gang, id) => {
            if (gang.nome != undefined) {
                if (gang.nome.toLowerCase().indexOf(search) > -1 || gang.nome.toLowerCase() === search)
                    listGangs.push(id)
            }
        })

        if (listGangs.length == 1)
            gang = listGangs[0]
        else {
            console.log(listGangs)
            // Criar listagem de gangs
        }

        res.status(200).json(gangs.get(gang))
    }

    return controller;
}