const express = require('express')
const { default: mongoose } = require('mongoose')
const mondoose = require('mongoose')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout:'main',
    extname:"hbs"
})

app.use(todoRoutes)

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views','views')

app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb+srv://irinavig04:hdB0qsd82cZZCcSl@cluster0.t7xujhk.mongodb.net/&appName=todos')
app.listen(PORT,() => {
    console.log('Server has been started...')
})