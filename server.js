 const express = require('express');
 const mysql = require('mysql');
 const cors = require('cors');

 const app = express()
 app.use(cors())
 app.use(express.json())

 const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'signup'
 })

 app.post('/signup', (req, res) => {
    const sql = 'INSERT INTO login (`name`, `email`, `password`, `phoneNumber`) VALUES (?,?,?,?)';
    const values = [req.body.name, req.body.email, req.body.password, req.body.phoneNumber]
    db.query(sql, values, (err, result) => {
     if (err) {
      console.log(err)
     } else {
      res.send('Success')
     }
    })
 })

 app.listen(8081, () => {
  console.log('Server is running on port 8081')
 })