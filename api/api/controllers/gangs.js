module.exports = () => {
    const Enmap = require("enmap");
    //const gangPageDB = require('../data/customer-wallets.json');

    const gangs = new Enmap({
        name: "gangs"
    })

    const users = new Enmap({
        name: "data"
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

    // controller.listGangs = (req, res) => res.status(200).json(listGang);

    // controller.getGang = (req, res) => {
    //     console.log('Gang', req.query.search)

    //     let search = req.query.search.toString().toLowerCase()

    //     gangs.forEach((gang, id) => {
    //         if (gang.nome != undefined) {
    //             if (gang.nome.toLowerCase().indexOf(search) > -1 || gang.nome.toLowerCase() === search)
    //                 listGangs.push(id)
    //         }
    //     })
    //     console.log(listGangs)
    //     if (listGangs.length == 1) {
    //         let gang = listGangs[0]
    //         gang = gangs.get(gang)
    //         gang.lider = users.get(gang.lider)
    //         gang.vicelider = users.get(gang.vicelider)
    //         for (x = 0; x < gang.membros.length; x++)
    //             gang.membros[x] = users.get(gang.membros[x])

    //         res.status(200).json(gang)

    //     }
    // }
    controller.getGang = (req, res) => {
        let search = req.query.search.toString().toLowerCase()
        console.log(search)
        let gang = gangs.get(search)

        if (!gang)
            return

        gang.lider = users.get(gang.lider)
        gang.vicelider = users.get(gang.vicelider)
        for (x = 0; x < gang.membros.length; x++)
            gang.membros[x] = users.get(gang.membros[x])

        res.status(200).json(gang)

    }

    controller.listGangs = (req, res) => {
        console.log('Gang', req.query.search)
        let listGangs = []
        let search = req.query.search.toString().toLowerCase()

        gangs.forEach((gang, id) => {
            if (gang.nome != undefined) {
                if (gang.nome.toLowerCase().indexOf(search) > -1 || gang.nome.toLowerCase() === search)
                    listGangs.push(id)
            }
        })
        console.log(listGangs)
        if (listGangs.length > 0) {
            let listGangsExport = []
            listGangs.forEach(gang => {
                let nome = gangs.get(gang, 'nome')
                let imagem = gangs.get(gang, 'icone')
                let id = gang
                listGangsExport.push({ id: id, nome: nome, imagem: imagem })
            })
            console.log(listGangsExport)
            res.status(200).json(listGangsExport)

        } else {
            res.status(404)
        }
    }
    controller.getGangByUserId = (req, res) => {

        let userId = req.query.search.toString().toLowerCase()
        let user = users.get(userId)

        let userGang = gangs.get(user.gangID)
        if (!userGang)
            return console.error('Este usuário não possui gangue')

        userGang.lider = users.get(userGang.lider)
        userGang.vicelider = users.get(userGang.vicelider)
        for (x = 0; x < userGang.membros.length; x++)
            userGang.membros[x] = users.get(userGang.membros[x])

        res.status(200).json(userGang)
    }

    return controller;
}