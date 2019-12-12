let CustomerModel = require('../models/customer.model')
let express = require('express')
let router = express.Router()


//create a new customers
//POST localhost:3000/customers
// router.post('/customer', (req, res) => {
//     //req.body
//     if (!req.body) {
//         return res.status(400).send('Request body is missing')
//     }

//     let model = new CustomerModel(req.body)
//     model.save()
//         .then(doc => {
//             if (!doc || doc.length === 0) {
//                 return res.status(500).send(doc)
//             }

//             res.status(201).send(doc)
//         })
//         .catch(err => {
//             res.status(500).json(err)
//         })
// })


//create a new customers
//POST localhost:3000/customers
router.post('/customer/create', (req, res) => {
    //return res.send(`insert into customers(name,email,organization) values(${req.body.name}, ${req.body.email}, ${req.body.organization})`)
    //req.body
    if (!req.body) {
        return res.status(400).send('Request body is missing')
    }

    let sql = `insert into customers(name,email,organization) values('${req.body.name}', '${req.body.email}', '${req.body.organization}')`

    CustomerModel.query(sql, (err) => {
        if (err) throw err
        res.send('Customer created successfully')
    })



})

//create a new customers
//POST localhost:3000/customers
router.get('/customer/all', (req, res) => {
    let sql = 'Select * from customers'

    CustomerModel.query(sql, (err, rows, fields) => {
        if (err) throw err
        //res.send(rows[0]["name"])
        res.send(rows)
    })
})

//create a new customers
//POST localhost:3000/customers
router.get('/customer/profile/:email', (req, res) => {
    let sql = `Select * from customers where id=${req.params.email}`

    CustomerModel.query(sql, (err, rows, fields) => {
        if (err) throw err
        //res.send(rows[0]["name"])
        res.send(rows)
    })
})

module.exports = router