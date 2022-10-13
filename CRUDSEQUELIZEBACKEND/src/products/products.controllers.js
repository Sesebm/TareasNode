const uuid = require("uuid");
const Products = require("../models/products.models");

const getAllProducts = () => {// Traer todas los productos
    const data = Products.findAll(); 
    return data;
  };

  const createNewProduct = async (data) => {// inserta nuevo productos
    const newProducts = await Products.create({
      id: uuid.v4(), name: data.name, category: data.category, price: data.price, isAvailable: data.isAvailable,
    });
    return newMovie;
  };

  const getProductById = async (id) => {// Busca por id 
    const data = await Products.findOne({
      where: {
        id,
      },
    });
    return data;
  };

  const editProduct = async (id, data) => {
    const response = await Products.update(data, {
      where: {
        id: id,
      },
    });
    return response;// retorna null
  };

  const deleteProduct = async (id) => {
    const data = await Products.destroy({
        where: {
            id: id
        }
    })
    return data
}

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  editProduct,
  deleteProduct
};