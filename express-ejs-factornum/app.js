const express = require('express')
const controller = require("./controllers/controller")
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', controller.index)

app.get("/:number", controller.results)

app.use(express.static('static'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))