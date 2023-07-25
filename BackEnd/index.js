const express = require("express")
const path = require("path")
const app = express()
// const hbs = require("hbs")
const LogInCollection = require("./mongodb")
const port = process.env.PORT || 3001
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

// const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);

app.set('view engine', 'hbs')
// app.set('views', tempelatePath)
app.use(express.static(publicPath))


// hbs.registerPartials(partialPath)



app.listen(port, () => {
    console.log('port connected');
})