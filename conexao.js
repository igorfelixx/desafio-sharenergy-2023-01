const mongoose = require('mongoose');

mongoose.set("strictQuery", true);

mongoose.connect('mongodb://127.0.0.1:27017/desafio');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('Conectado a MongoDB')})
objetobd.on('error', ()=>{console.log('Erro na conexão')})

module.exports = mongoose