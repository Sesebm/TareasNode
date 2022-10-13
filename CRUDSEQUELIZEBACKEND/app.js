const express = require('express');
const db = require('./src/utils/database')
const initModels = require('./src/models/initModels')

const config = require('./src/config')
const productRoutes = require('./src/products/products.routes')
const app = express()

// Authenticate database credentials

db.authenticate()
  .then(() => console.log('Database authenticated'))
  .catch(err => console.log(err));

// Sync sequelize models
db.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err));

// Establish models relations
initModels();



app.use(express.json())
app.get('/', (req, res) => {
    res.status(200).json({message: 'todo funciona OK!'})
})

app.use('/', productRoutes)



app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`)
})
