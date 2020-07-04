const express=require('express')
const app=express()

const port=3000

const morgan=require('morgan')
const mongoose=require('mongoose')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
mongoose.connect('mongodb://localhost:27017/upload',{
    useNewUrlParser:true
})

app.use(require('./router'))

app.listen(port,()=>{
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})