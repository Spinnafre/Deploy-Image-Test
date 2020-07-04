const multer =require('multer')
const crypto=require('crypto')
const path=require('path')

module.exports={
    dest:path.resolve(__dirname,'..','..','tmp','uploads'),
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
        },
        filename:(req,file,cb)=>{
            crypto.randomBytes(16,(err,hash)=>{
                if(err){
                    cb(err)
                }

                const filename=`${hash.toString('hex')} - ${file.originalname}`
                cb(null,filename)
            })
        }
        
    }),
    limits:{
        fileSize:2*1024*1024
    },
    fileFilter:(req,file,cb)=>{
        const allowrdMimes=[
            'image/png',
            'image/pjpeg',
            'image/jpeg',
            'image/gif'
        ]
        if(allowrdMimes.includes(file.mimetype)){
            cb(null,true)
        }else{
            cb(new Error('Deu merda aí meu irmão, provavelmente deve ser por causa do arquivo não suportado!'))
        }
    }

}