const express = require("express");
const naviapp = express.Router();
const mysql = require('mysql');
const dbcon = require('../data/dbconfig.json')

naviapp.use(express.json())
naviapp.use(express.urlencoded({ extended: true }))

var conn = mysql.createPool(dbcon);

naviapp.get("/:tablenm", (req, res, next) => {
  const tablenm = req.params.tablenm;
  req.body.crud = "select";
  req.body.tablenm = tablenm;


  conn.getConnection((error, connection) => {
    if (error) throw console.log("디비접속오류" + error)


    connection.query(`SELECT * FROM ${tablenm}`, (errors, success) => {
      if (errors) {
        throw console.log('connect.js에서 insert 오류' + errors)
      }
      res.send(success)
      connection.release();
    })
  }
  )


})
naviapp.post('/:tablenm', (req, res, next) => {
  //insert 전용
  const tablenm = req.params.tablenm;

  const columns = Object.keys(req.body.body).join(', ');
  const values = Object.values(req.body.body).map(value => `'${value}'`).join(', ');


  // res.send(`${tablenm} ${columns} ${values}`)








  conn.getConnection((error, connection) => {
    if (error) throw console.log("디비접속오류" + error)

    if (tablenm == "member") {



      connection.query(`SELECT * FROM ${tablenm} where name = '${req.body.body.name}'`, (errors, success) => {
        if (errors) {
          throw console.log('connect.js에서 insert 오류' + errors)
        }
        if (success.length) {
          res.send(req.body.body.name == "admin" ? "s" : "m")
        } else {
          res.send("nomember")
        }
        connection.release();
      })


    } else {
      connection.query(`INSERT INTO ${tablenm}  (${columns})
  VALUES (${values})`, (errors, success) => {
        if (errors) {
          throw console.log('connect.js에서 insert 오류' + errors)
        }
        res.send(success)
        connection.release();
      })
    }
  }








    // conn.getConnection((error, connection) => {
    //   if (error) throw console.log("디비접속오류" + error)


    //   connection.query(`INSERT INTO ${tablenm}  (${columns})
    //          VALUES (${values})`, (errors, success) => {
    //     if (errors) {
    //       throw console.log('connect.js에서 insert 오류' + errors)
    //     }
    //     res.send(success)
    //     connection.release();
    //   })
    // }





  )

})

module.exports = naviapp;