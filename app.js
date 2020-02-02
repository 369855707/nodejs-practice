const express = require('express')
const app = express()
const port = 3000

const controller = require("./controllers/maincontroller.js")

//定义模板引擎
app.set("view engine","ejs");

app.get('/',(req,res) => res.render("index"));
app.get('/showAll', controller.showAllOrders );
app.get('/oneorder/:phone', controller.oneorder );
app.post('/order', controller.saveOrder );



app.use(express.static("static"));

app.listen(port,()=>console.log("listening on port 3000"))