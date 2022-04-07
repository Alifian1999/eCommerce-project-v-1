const express= require('express')
const app=express()
const db=require('./database/db')
const cors=require('cors')
const multer = require('multer')
const upload = multer({dest : '../client/public/uploads', limits:{fieldSize: 10*1024*1024}})
const fs = require('fs')
const PORT=5000

app.use(cors())
app.use(express.json())
app.use('/static',express.static('uploads'))

//start barang
    
app.post('/post-items',upload.single('file'), async (req,res)=>{
    try {
        
        let fileName = await req.file.mimetype.split('/')[1]
        let newFileName = req.file.filename + '.' +fileName
        let item_image = `/uploads/${newFileName}`

            fs.rename(
            `../client/public/uploads/${req.file.filename}`,
            `../client/public/uploads/${newFileName}`,
            (err)=>{
            if(err) throw err
            console.log('success');
            })

            const connected = await db.connect()
            const data = await connected.query( `insert into tb_items(item_name,item_price,item_size,item_description,item_image) 
            values('${req.body.item_name}','${req.body.item_price}','${req.body.item_size}','${req.body.item_description}','${item_image}')`) 
            console.log(item_image);

            res.status(200).send({
                status: 'success',
                data
            })
        
    } catch (error) {
        console.log(error);
    }
})

app.get('/product/all',async (req,res)=>{
    try {
        const connected = await db.connect()
        const data = await connected.query('select * from tb_items')
        const result = data.rows;
        res.status(200).send({
            status : 'success',
            result : result
        })
    } catch (error) {
        console.log(error);
    }
})

app.get('/product/get/:id', async (req,res)=>{
    try {
        const connected = await db.connect()
        const data = await connected.query(`select * from tb_items where id=${req.params.id}`)
        const result = data.rows
        

        res.status(200).send({
            status : 'success',
            result : result
        })
    } catch (error) {
        console.log(error);
    }
})

// end barang




app.patch('/user/update:id',(req,res)=>{
    try {
        db.connect((err,done)=>{
            if(err) throw err
            done.query(`UPDATE tb_user SET username='${req.body.username}',password='${req.body.password}' WHERE id='${req.params.id}`,(err,result)=>{
                if(err)throw err
                res.status(200).send({
                    status:getBarangSuccess,
                    result:result.rows
                })
            })
        })
    } catch (error) {
        console.log(error);
    }
})

app.post('/user/register',(req,res)=>{
    try {
        db.connect((err,done)=>{
            if(err)throw err
            done.query(`insert into tb_user(username,password) values('${req.body.username}','${req.body.password}')`,(err,result)=>{
                if(err)throw err
                res.status(200).send({
                    status:'success',
                    result:result.rows
                })

            })
        })
    } catch (error) {
        console.log(error);
    }
})

app.delete('/user/delete/:id',(req,res)=>{
    try {
        db.connect((err,done)=>{
            if(err)throw err
            done.query(`delete from tb_user where id='${req.params.id}'`,(err,result)=>{
                if(err)throw err
                res.status(200).send({
                    status:"success",
                    result:result.rows
                })
            })
        })
    } catch (error) {
        console.log(error);
    }
})

app.get('/user/sign-in',(req,res)=>{
   try {
       db.connect((err,done)=>{
           if(err)throw err
           done.query('select * from tb_user',(err,result)=>{
               if(err) throw err
               res.status(200).send({
                   status:'success',
                   result:result.rows
               })
           })
       })
   } catch (error) {
       console.log(error);
   }
})
app.listen(PORT, console.log('app listen to PORT '+PORT))