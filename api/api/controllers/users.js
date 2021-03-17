
module.exports = () => {
    const Enmap = require("enmap");
    //const gangPageDB = require('../data/customer-wallets.json');

    const users = new Enmap({
        name: "data"
    })

    let listUsers = []
    users.forEach(user => {
        if (user.username != undefined) {
            listUsers.push(user)
        }
    })

    const controller = {};

    controller.listUsers = (req, res) => res.status(200).json(listUsers);

    controller.getUserById = (req, res) => {
        let search = req.query.search.toString().toLowerCase()

        users.forEach((user, id) => {
            if (user.username != undefined) {
                if (id.indexOf(search) > -1)
                    res.status(200).json(users.get(id))
            }
        })
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