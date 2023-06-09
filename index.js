const express = require("express")
const app = express()
app.use(express.json())


function addNums(req, res) {

   // if (req.query.a == null || req.query)
const a = Number(req.query.a);
const b = Number(req.query.b);
// const name = req.body.name;
// console.log(name);
const sum = a+b;
res.send({"sum" : sum});
}
function subNums(req, res) {
const a = req.body.a;
const b = req.body.b;
// const name = req.body.name;
// console.log(name);
const sum = a-b;
res.send({"sum" : sum});
}
function prodNums(req, res) {
const a = req.body.a;
const b = req.body.b;
// const name = req.body.name;
// console.log(name);
const sum = a*b;
res.send({"sum" : sum});
}
function divNums(req, res) {
const a = req.body.a;
const b = req.body.b;
// const name = req.body.name;
// console.log(name);
const sum = a/b;
res.send({"sum" : sum});
}

app.get('/addTwoNums', addNums)
app.get('/subTwoNums', subNums)
app.get('/prodTwoNums', prodNums)
app.get('/divTwoNums', divNums)



const port = 3001
const ip = "localhost"

app.listen(port, ip, function() {
    console.log("I am listening");
})