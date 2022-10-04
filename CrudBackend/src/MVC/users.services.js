const {getAllUsers,getUserById,createUser} = require('./users.controllers')

const getUsers = (req, res) => {
    const data = getAllUsers()
    res.status(200).json(data)
}

const getById = (req, res) => {
    const id = req.params.id
    const data = getUserById(id)
    if(data){
        res.status(200).json(data)
    } else {
        res.status(404).json({id: id, message: 'Does not exist'})
    }
}

const createNewUser= (req, res) => {
    const cratnewUser = req.body

    if(cratnewUser){
        const data = createUser(cratnewUser)
        res.status(201).json(data)
    } else {
        res.status(400).json({message: 'Missing Data'})
    }
}

module.exports = {
    getUsers,
    getById,
    createNewUser
}