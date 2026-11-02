const express = require('express')
const { default: mongoose } = require('mongoose')
const mondoose = require('mongoose')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')
var bodyParser = require('body-parser')
const urlencode = require('urlencode').encode
const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout:'main',
    extname:"hbs"
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views','views')
//app.use(bodyParser.json());;
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.urlencoded({extended:true}))
app.use(express.urlencoded({ extended: true }));
app.use(todoRoutes)
const uri = process.env.LEGACY_URI;
mongoose.connect(uri)
app.listen(PORT,() => {
    console.log('Server has been started...')
})

const Todo = require('./models/Todo')
async function test () {
    const todos =await Todo.find();
    console.log(todos);
}
test()
