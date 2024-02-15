const express = require("express");
const naviapp = express.Router();
const mysql = require('mysql');
const dbcon = require('../data/dbconfig.json');

naviapp.use(express.json());
naviapp.use(express.urlencoded({ extended: true }));

var conn = mysql.createPool(dbcon);

naviapp.get("/:tablenm", (req, res, next) => {
  const tablenm = req.params.tablenm;
  req.body.crud = "select";
  req.body.tablenm = tablenm;

  conn.getConnection((error, connection) => {
    if (error) throw console.log("디비접속오류" + error);

    connection.query(`SELECT * FROM ${tablenm}`, (errors, success) => {
      if (errors) {
        throw console.log('connect.js에서 select 오류' + errors);
      }
      res.send(success);
      connection.release();
    });
  });
});

naviapp.post('/:tablenm', (req, res, next) => {
  const tablenm = req.params.tablenm;

  if (tablenm == "member") {
    // Handle login request
    const { name, password } = req.body.body;
    console.log("요청덩어리", req, req.body.body) // chat! why 요청덩어리 {}  req.body empty????

    conn.getConnection((error, connection) => {
      if (error) throw console.log("디비접속오류" + error);

      connection.query(`SELECT * FROM ${tablenm} WHERE name = ?`, [name], (errors, results) => {
        if (errors) {
          throw console.log('connect.js에서 select 오류' + errors);
        }

        if (results.length) {
          // User found, check password
          res.send(name === "admin" ? { "member": "최고관리자" } : { "member": "회원" });

        } else {
          // User not found
          res.send({ "member": "nomember", "mbid": "results.length 검색결과가 없음" });
        }
        connection.release();
      });
    });
  } else {
    // Handle other POST requests
    const columns = Object.keys(req.body.body).join(', ');
    const values = Object.values(req.body.body).map(value => `'${value}'`).join(', ');

    conn.getConnection((error, connection) => {
      if (error) throw console.log("디비접속오류" + error);

      connection.query(`INSERT INTO ${tablenm} (${columns}) VALUES (${values})`, (errors, success) => {
        if (errors) {
          throw console.log('connect.js에서 insert 오류' + errors);
        }
        res.send(success);
        connection.release();
      });
    });
  }
});

module.exports = naviapp;