const express = require('express')

//  Folosit pentru a implementa functiile GET,POST,PUT,DELETE,POST
const router = express.Router()

const { Posts } = require('../models')

//  configurarea GET-Request
router.get("/", async (req, res) => {
    const listOfPosts = await Posts.findAll()
    res.json(listOfPosts)
})

//  configurarea POST-Request asyncron
router.post("/", async (req, res) => {
    //  aici salvam informatia primita din corpul(body) Requestului intr-o constanta
    const post = req.body
    //  Asteapta ca noua postare primita de la frontend sa fie salvata in baza de date
    //  prin intermediul parametrului primit post, functia este din pachetul sequelize
    await Posts.create(post)
    //  aici se returneaza pachetul de date ca raspuns
    res.json(post);
})

module.exports = router