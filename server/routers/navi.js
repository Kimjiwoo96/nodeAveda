const express = require("express")
const naviapp = express.Router();

naviapp.use(express.json())
naviapp.use(express.urlencoded({ extended: true }))


const conntectRouter = require("../mysql/connect")


naviapp.post('/:tablenm', (req, res, next) => {
  // const tablenm = req.query.tablenm;
  const tablenm = req.params.tablenm;


  if (tablenm == "myform") {
    req.body.crud = "insert"
  } else {
    req.body.crud = "select"
  };








  // axiosurl.post('/', (req, res, next) => {

  //   const botable = req.query.botable ? req.query.botable : "";
  //   const id = req.query.id ? req.query.id : "";
  //   const w = req.query.w ? req.query.w : "";

  //   if (w == "") {
  //     req.body.crud = "select";

  //     req.body.botable = "botable";
  //     req.body.id = "id";

  //     next('route');

  //   } else if (w == "u") {
  //     req.body.crud = "update";

  //     req.body.botable = "botable";
  //     req.body.id = "id";

  //     next('route');

  //   } else if (w == "i") {
  //     req.body.crud = "insert";

  //     req.body.botable = "botable";

  //     next('route');

  //   } else if (w == "d") {
  //     req.body.crud = "delete";

  //     req.body.botable = "botable";
  //     req.body.id = "id";

  //     next('route');

  //   } else {
  //     res.send("라우터세팅안됨");

  //   }

  // })























  req.body.tablenm = tablenm;


  naviapp.use("/", conntectRouter)
  next('route')

})

module.exports = naviapp;