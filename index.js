const express=require('express')
const app=express()
const port=3000

//middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))


app.post('/formulario',(req,res)=>{
    /* console.log(req.body); */
    const fs=require('fs');
    const {id,nombre,apellido,titulo,autor,editorial,año}=req.body
    if(!id||!nombre||!apellido||!titulo||!autor||!editorial||!año)return res.redirect('/error.html')
    res.send(`Datos Enviados...${id} - ${nombre} - ${apellido} - ${titulo} - ${autor} - ${editorial} - ${año}`)
    fs.writeFile('data/id_123.txt',`${id} - ${nombre} - ${apellido} - ${titulo} - ${autor} - ${editorial} - ${año}`,(error)=>{
        if(error){
            console.log(`Error: ${error}`)
        }
        setTimeout(()=>{
            res.download('data/id_123.txt',(error)=>{
                if(error){
                    console.log(`Error: ${error}`)
                }
            })
        },3000)
        
    })
})


app.listen(port,()=>{
    console.log(`App funcionando en puerto: ${port}`);
})
