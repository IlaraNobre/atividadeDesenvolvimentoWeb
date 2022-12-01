const express = require('express')
const routes = express.Router()

//Banco de Dados referente a tela Endereço de cobrança do Front-end MID Burguer (Atividade 01)
let db = [
    {'1': {Nome: 'Ana', Sobrenome: 'Sousa', userName: 'anasousa1', Endereco: 'Rua 1, 01', Complemento: 'Ap. 01', Pais: 'Brasil', Estado: 'Ceará', CEP: '60000000'}},
    {'2': {Nome: 'Maria', Sobrenome: 'Silva', userName: 'mariasilva2', Endereco: 'Rua 2, 02', Complemento: 'Ap. 02', Pais: 'Brasil', Estado: 'Ceará', CEP: '60000000'}},
    {'3': {Nome: 'João', Sobrenome: 'Lopes', userName: 'joaolopes3', Endereco: 'Rua 3, 03', Complemento: 'Ap. 03', Pais: 'Brasil', Estado: 'Ceará', CEP: '60000000'}}
]

//ler banco
routes.get('/',(req,res) => {
    return res.json(db)
})

//adicionar
routes.post('/add', (req, res) => {
    const body = req.body

    if (!body)
        return res.status(400).end()

        db.push(body)
        return res.json(body)
})

//deletar
routes.delete('/:id', (req, res)=>{
    const id = req.params.id
    let newDB = db.filter(item => {
        if (!item[id])
        return item
    })

    db = newDB
    return res.send(newDB)
})

//atualizar
routes.put('/:id', (req,res) =>{
    const id = req.params.id    
    const newEndereco = id.update(req.body)

    return res.json(newEndereco)
}) 

module.exports = routes