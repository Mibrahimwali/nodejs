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
router.get('/customer/create', (req, res) => {
    let sql = 'insert into customers(name,email,organization) values("Ibrahim", "ibrahim.wali@gmail.com", "CentricDXB")'

    CustomerModel.query(sql, (err) => {
        if (err) throw err
        res.send('Customer created successfully')
    })
})

module.exports = router