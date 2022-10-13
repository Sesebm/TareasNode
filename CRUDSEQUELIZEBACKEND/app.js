const db = require('./utils/database')
const express = require('express');
const initModels = require('./models/initModels')
const config = require('./config')


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

const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    res.status(200).json({message: 'todo funciona OK!'})
})

app.use('/', moviesRouter)



app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`)
})
