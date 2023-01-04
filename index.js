const express = require('express')
const app = express()

//Importar conexão mongoDB
const arquivoBD = require('./conexao')

//Importação do arquivo de rotas e modelo usuario
const rotasUsuario = require('./rotas/usuario')

//Importar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rotasUsuario)

app.get('/', (req, res) => {
    res.end('Bem-vindo ao servidor backend Node.js...')
})


//Configurar server básico
app.listen(5000, function(){
    console.log('Server running on port 5000...')
})
