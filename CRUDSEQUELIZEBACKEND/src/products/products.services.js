const productsController = require('./products.controllers')


const getAllProducts = (req, res) => { /* todas los productos */
    productsController
      .getAllProducts()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  };

  const postProduct = (req, res) => { /* nuevo productos */
    const data = req.body;
    if (data.name && data.category && data.price && data.isAvailable) {
        productsController
        .createNewProduct(data)
          .then(response => {
              res.status(201).json(response)
          })
          .catch(err => {
              res.status(400).json({message : err.message})
          })  
    } else {
      res.status(400).json({message : 'Missing data'})
    }
  };

  const getProductById = (req, res) => { /* Busca por id  */
    const id = req.params.id;

    ProductsControllers.getProductById(id)
        .then(data => {
          if(data){
            res.status(200).json(data)
          }else {
            res.status(404).json({message: 'Invalid ID'})
          }
        })
        .catch(err => {
            res.status(404).json({message: err.message})
        })
}

const editProduct = (req, res) => {
    const id = req.params.id 
    const {name, category, price, isAvailable} = req.body;
  
    productsControllers.editProduct(id, {name, category, price, isAvailable})
      .then((response) => {
        //? [0]
        if(response[0]){
          res.status(200).json({
            message: ` ${id} was edited succesfully!`
          })
        } else {
          res.status(400).json({message: 'Invalid ID'})
        }
      })
      .catch(error => {
        res.status(400).json({message: error.message})
      })
  }

  const deleteProduct = (req, res) => {
    const id = req.params.id
    productControllers.deleteProduct(id)
      .then((response) => {
        if(response){
          res.status(204).json()
        }else{
          res.status(400).json({message: 'Invalid ID'})
        }
      })
      .catch(err=> {
        res.status(400).json(err)
      })
  }

  module.exports = {
    getAllProducts,
    postProduct,
    getProductById,
    editProduct,
    deleteProduct
}