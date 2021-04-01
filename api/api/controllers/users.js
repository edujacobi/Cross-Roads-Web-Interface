
module.exports = () => {
    const Enmap = require("enmap");
    //const gangPageDB = require('../data/customer-wallets.json');

    const users = new Enmap({
        name: "data"
    })

    const gangs = new Enmap({
        name: "gangs"
    })

    let listUsers = []
    users.forEach(user => {
        if (user.username != undefined) {
            listUsers.push(user)
        }
    })

    const controller = {};

    controller.listUsers = (req, res) => {
        console.log('Users', req.query.search)
        let listUsers = []
        let search = req.query.search.toString().toLowerCase()

        users.forEach((user, id) => {
            if (user.username != undefined) {
                if (user.username.toLowerCase().indexOf(search) > -1 || user.username.toLowerCase() === search)
                    listUsers.push(id)
            }
        })

        if (listUsers.length > 0) {
            let listUsersExport = []
            listUsers.forEach(user => {
                let nome = users.get(user, 'username')
                let imagem = 'https://cdn.discordapp.com/attachments/531174573463306240/821378668327600179/placeholder.png'
                let id = user
                listUsersExport.push({ id: id, nome: nome, imagem: imagem })
            })
            // console.log(listUsersExport)
            res.status(200).json(listUsersExport)

        } else {
            res.status(404)
        }
    }
    controller.getUserById = (req, res) => {
        let search = req.query.search.toString().toLowerCase()

        users.forEach((user, id) => {
            if (user.username != undefined) {
                if (id.indexOf(search) > -1)
                    res.status(200).json(users.get(id))
            }
        })
    }

    controller.getUserListGang = (req, res) => {
        let liderID = req.query.search // recebe o ID de usuário do Líder
        let gang = gangs.get(users.get(liderID, 'gangID'))
        let userList = {}

        userList.lider = users.get(gang.lider, 'username')

        if (gang.vicelider != null)
            userList.vicelider = users.get(gang.vicelider, 'username')

        let gangMembros = []

        if (gang.membros.length > 0) {
            for (membro of gang.membros)
                gangMembros.push(users.get(membro, 'username'))
        }

        userList.membros = gangMembros

        res.status(200).json(userList)
    }

    controller.getUserUsernameById = (req, res) => {
        let search = req.query.search.toString().toLowerCase()

        users.forEach((user, id) => {
            if (user.username != undefined) {
                if (id.indexOf(search) > -1)
                    res.status(200).json(users.get(id).username)
            }
        })
    }

    return controller;
}