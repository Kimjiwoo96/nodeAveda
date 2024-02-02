const express = require('express');
const productrouter = express.Router();
const mysql = require('mysql');
const dbcon = require('../data/dbconfig.json')


productrouter.use(express.json());
var conn = mysql.createPool(dbcon);


productrouter.use("/", (req, res) => {
    // res.send(`${req.body.tablenm} ${req.query.crud}`)


    const tablenm = req.body.tablenm;
    const crud = req.body.crud;

    conn.getConnection((error, connection) => {






        if (error) {
            throw console.log(error)
        }

        if (crud == 'select') {
            connection.query(`select * from ${tablenm}`, (errors, success) => {
                if (errors) {
                    throw console.log(errors)
                }

                res.send(success)
            })
        } else if (crud == 'insert') {
            connection.query(`INSERT INTO ${tablenm} (u_name,u_phone ,u_email,marketing) VALUES ("jiwoo", "010232938478" , "wisejiwoo96@naver.com" , "")`, (errors, success) => {
                if (errors) {
                    throw console.log(errors)
                }
                res.send(success)
            })
        }
        // else if (crud == "update") {
        //     connection.query(`select * from ${tablenm}`, (err, result) => {

        //         if (err) throw console.log('쿼리문 다시 작성해')
        //         res.send(result)
        //     })
        //     connection.release();

        // } else {
        //     connection.query(`delete * from ${tablenm} where id=${id}`, (err, result) => {

        //         if (err) throw console.log('쿼리문 다시 작성해')
        //         res.send("삭제했습니다.")
        //     })
        //     connection.release(); //연결반환
        // }


    })
})




module.exports = productrouter;

