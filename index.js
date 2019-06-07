const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

const server = express();

server.use(express.json());


server.get('/', (req, res) => {
    res.send('<h2>Whassup</h2>')
})

server.get('/api/recipes', (req, res) => {
    db('recipes')
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
server.get('/api/dishes', (req, res) => {
    db('dishes')
    .then(dishes => {
        res.status(200).json(dishes)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
server.get('/api/ingredients', (req, res) => {
    db('ingredients')
    .then(ingredients => {
        res.status(200).json(ingredients)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
server.get('/api/recipe_ingredients', (req, res) => {
    db('recipe_ingredients')
    .then(ingredients => {
        res.status(200).json(ingredients)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

server.post('/api/recipes', (req, res) => {
    db('recipes')
    .insert(req.body, "name")
    .then(recipe => {
        res.status(201).json(recipe)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})


const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`running on http://localhost:${port}`)
})