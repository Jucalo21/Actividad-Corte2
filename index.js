const express=require('express')
const app=express()
const port=3000

//middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.post('/formulario',(req,res)=>{
    console.log(req.body);
    const {id,nombre,apellido,titulo,autor,editorial,año}=req.body
    if(!id||!nombre||!apellido||!titulo||!autor||!editorial||!año)return res.redirect('/error.html')
    res.send(`Datos Enviados...${id} - ${nombre} - ${apellido} - ${titulo} - ${autor} - ${editorial} - ${año}`)
})


app.listen(port,()=>{
    console.log(`App funcionando en puerto: ${port}`);
})
