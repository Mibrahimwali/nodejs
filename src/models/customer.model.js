let mongoose = require('mongoose')

const server = ''
const database = ''
const user = ''
const password = 'NMRlvFS33gO4GR6M'

mongoose.connect(`mongodb+srv://local_node:${password}@clusternode-cadke.mongodb.net/test?retryWrites=true&w=majority`)

// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'password',
//     database: 'node_local'
// });
// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected!');
// });

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)