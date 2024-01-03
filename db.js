const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MONGO_URL = process.env.MONGO_URL 

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('Conexión a MongoDB Atlas establecida con éxito');
  })
  .catch(error => {
    console.error('Error al conectar a MongoDB Atlas:', error.message);
  });

mongoose.connection.on('connected', ()=>{
    console.log('connected to database:')
})