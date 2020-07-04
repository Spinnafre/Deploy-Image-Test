const router=require('express').Router()
// Multer é usado para trabalhar com envios de arquivos
const multer=require('multer')
const multerConfigs=require('./config/multer')
/* Usando o multer Single eu estou definindo que irá enviar um arquivo por vez, caso queira
enviar arquivos múltiplos use o multer().array
*/
const Post=require('./models/Post')
router.post('/posts', multer(multerConfigs).single('file'),async (req,res)=>{
    const {originalname:name,size,filename:key} =req.file
    const post= await Post.create({
        name,
        size,
        key,
        url:''

    })
    return res.json(post)
})

module.exports=router