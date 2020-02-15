const express = require("express")
const mainCtrl = require("./controllers/maincontroller")

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    mainCtrl.index(req, res)
})

app.get('/all', (req, res) => {
    mainCtrl.allEmployees(req, res)
})

app.get('/add', (req, res) => {
    mainCtrl.add(req, res)
})

app.post('/add', mainCtrl.insertOne)

app.use(express.static('public'))

app.listen(3000, () => console.log('server is listening at 3000 port'))