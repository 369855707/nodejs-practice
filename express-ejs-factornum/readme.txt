framework:
1.express
2.ejs
3.bootstrap

MVC layers:
Model
View
Controller

steps : 
1.intall dependencies : 
express 
npm install express --save
ejs
npm install ejs --save

2.
add express routes for controllers in app.js
app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})

add routes for static resources
app.use(express.static('static'));

add ejs template engine

3.add Controllers
controller only rediect url
because nodejs good at reading/writing , so we are using file cache once done calculation so as to avoid do math after.


4.add models
math
calculate factorynumber
file
read: read results from number.txt first. because it is asynchronise. need pass function into read function
write: write results into number.txt after calculation.

5.invoke models in controllers for calculating factor numbers
var resultsArr = math.calc(number);


6.set value to ejs template
res.render("result",{
    "number" : number,
    "resArr" : resultsArr,
    "during" : T2 - T1
});
