const { DataTypes } = require('sequelize'); // Importamos DataTypes de sequelize, esto nos ayudara a generar el tipo de dato que se guardara en nuestra base de datos
const { db } = require('../utils/database'); //Aqui importamos la utilidad que creamos anteriormente

const Products = db.define('products', { //Creamos un modelo Producs, accediendo a db.define()
																			
    id: { 
        primaryKey: true, //Aqui asignamos que es una Llave primaria, un identificador unico
        type: DataTypes.UUID, //aqui va el tipo de dato, accedemos a DataTypes y seleccionamos el tipo de dato, en este caso UUID
        allowNull: false, //Aqui ponemos que este campo no puede ser un valor nulo, por lo tanto, es requerido
    },
    name: {
        allowNull: false, //Aqui ponemos que este campo no puede ser un valor nulo, por lo tanto, es requerido
        type: DataTypes.STRING,//aqui va el tipo de dato, accedemos a DataTypes y seleccionamos el tipo de dato, en este caso es STRING
    },
    category: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    price: {
        allowNull: false,
        type: DataTypes.INTEGER, 
    },
    isAvailable: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
    },
});

module.exports = Products;