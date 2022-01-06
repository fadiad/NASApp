const Planet = require("../models/NASADB")
const express = require('express')
const API = require('../Tools/apiClass')
const router = express.Router()
const urllib = require('urllib');
const api = new API()

router.get('/planets', function (req, res) {
    urllib.request('https://api.nasa.gov/planetary/apod?api_key=fznrFeVMEkusRzBlWZYIbach1IBCs2iBgzTu34JV', function (err, data, respnse) {
        if (err) {
            throw err;
        }
        let pureData = api.filtereHomeData(JSON.parse(data))
        res.send(pureData)
    });
})


router.get('/planets/:planetName', function (req, res) {
    urllib.request(`https://images-api.nasa.gov/search?q=${req.params.planetName}`, function (err, data, respnse) {
        if (err) {
            throw err;
        }

        let pureData = api.filtereSearchData(JSON.parse(data))
        res.send(pureData)
    });
})


router.post('/favorites', function (req, res) {
    let { title, href } = req.body
    let p = new Planet({
        title: title,
        href: href
    })
    p.save()
    res.send("ASD")
})


router.get('/favorites', function (req, res) {
    Planet.find({}, function (err, planets) {
        res.send(planets)
    })
})




router.delete('/favorites', async function (req, res) {
    await Planet.deleteOne({ _id: req.body.id });
    Planet.find({}, function (err, planets) {
        res.send(planets)
    })
})

module.exports = router




