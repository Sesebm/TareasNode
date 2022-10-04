const router = require('express').Router()
const usersServices = require('./users.services')

router.get('/users', usersServices.getUsers)
router.get('/users/:id', usersServices.getById)
router.post('/users', usersServices.createNewUser)


/* Pase rato con error       throw new TypeError('Router.use() requires a middleware function but got a ' + gettype(fn))  por esto*/
module.exports = router