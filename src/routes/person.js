let express = require('express')
let router = express.Router()

//Querystring => query property on the request object
// localhost:3000/person?name=ibby&age=20
router.get('/person', (req, res) => {
    if (req.query.name) {
        res.send(`You have requested for person ${req.query.name}`)
    }
    else {
        res.send('You have requested Person')
    }
})

//Prams property on requrest object
//localhost:3000/person/name
router.get('/person/:name', (req, res) => {
    res.send(`You have requested for person ${req.params.name}`)
})

module.exports = router