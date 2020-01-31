const express = require('express')
const app = express()

app.get('/', (req, res) =>  res.sendFile(__dirname + "/public/index.html"));

app.get('/student', (req, res) => res.send('学生信息'));

app.get('/student/:stuNo', (req, res) => {
    if(/^[\d]{6}$/.test(req.params.stuNo)) {
        res.send("学生学号 ：" + req.params.stuNo)
    } else {
        res.send("学号不合法 : " + req.params.stuNo);
    }
});

app.use(express.static('public'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));