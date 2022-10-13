const router = require('express').Router()

const productsServices = require('./products.services')


// Este son las rutas

router.get('/products', productsServices.getAllProducts) /* retorna todos los productos */
router.post('/products', productsServices.postNewProducts) /* maneja el req del cliente y crearas un nuevo producto */


router.get('/products/:id', productsServices.getProductsById) /* retorna el productos con el ID en especifico que recibes desde parametros */
router.patch('/:id', productsServices.patchproducts) /* Al hacer esta peticion deberas modificar el producto */
router.delete('/:id', productsServices.deleteproducts)  /* arrojara un status 204 sin contenido de respuesta */


module.exports = router
