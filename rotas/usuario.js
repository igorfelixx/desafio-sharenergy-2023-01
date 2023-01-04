const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema

const schemaUsuario = new schema({
    nome: String,
    email: String,
    telefone: String,
    idusuario: String,
    endereco: String,
    cpf: String
})

const ModeloUsuario = mongoose.model('usuarios', schemaUsuario)
module.exports = router

//Adicionar usuario
router.post('/adicionarusuario', (req, res) => {
    const novoUsuario = new ModeloUsuario({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        idusuario: req.body.idusuario,
        endereco: req.body.endereco,
        cpf: req.body.cpf,
    })
    novoUsuario.save(function(err){
        if(!err){
            res.send('Usuario adicionado com sucesso')
        }else{
            res.send(err)
        }
    })
})


//Obter todos os usuários
router.get('/obterusuarios', (req, res) =>{
    ModeloUsuario.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//Obter data de usuario
router.post('/obterdatausuario', (req, res) =>{
    ModeloUsuario.find({idusuario:req.body.idusuario}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//atualizar usuario
router.post('/atualizarusuario', (req, res) => {
    
    ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario}, {
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        cpf: req.body.cpf
    }, (err) => {
        if(!err){
            res.send('Usuario atualizado com sucesso!')
        }else{
            res.send(err)
        }
    })
})

//Apagar usuario
router.post('/apagarusuario', (req, res) => {
    
    ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario}, (err) => {
        if(!err){
            res.send('Usuario apagado com sucesso!')
        }else{
            res.send(err)
        }
    })
})

