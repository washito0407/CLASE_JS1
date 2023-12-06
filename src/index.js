//Creacion de un web server en Express

const express= require('express') //COMMONJS   


const {engine} = require('express-handlebars')

//Crear una instancia 
const app = express()





//Mandar info en formato JSON

app.use(express.json())

/*
app.post('/register',(req,res)=>{
    const{pedido,solicitado}=req.body
    res.send(`El pedido de ${pedido} es realizado por ${solicitado}`)

})
*/
/*
app.get('/pedido/:abc',(req,res)=>{
    //console.log(req.params)
    res.send(`El pedido es hamburguesa ${req.params.abc}`)
})
*/
/*
app.get('/search',(req,res)=>{
   // console.log(req.query);
   if (req.query.tipo == "sencilla"){
    res.send("Hamburguesa sencilla")
   }else{
    res.send("Otro tipo de hamburguesa")
   }
})
*/




app.get('/hamburguesa/simple', (req,res)=>{
    res.send("Hamburguesa - simple")
})




app.get('/hamburguesa/doble', (req,res)=>{
    res.sendFile('./doble.png',{
        root:__dirname
    })
})




app.get('/hamburguesa/triple', (req,res)=>{
    res.sendFile('./triple.docx',{
        root:__dirname
    })
})

app.get('/hamburguesa/mixta', (req,res)=>{
    res.status(200).json({
        "tipo": "Mixta",
        "extra":"NO"
    })
})








app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');



app.get('/hamburguesa/vegana', (req,res)=>{
    res.render('home')
})

app.get('/hamburguesa/contactos', (req,res)=>{
    res.render('contactos')
})

app.get('/hamburguesa/about', (req,res)=>{
    res.render('about')
})














/*
//----------------------------------------------------
app.get('/',(req,res)=>{
    res.send("Bienvenidos")
})


//------------------------------
app.get('/dashboard',(req,res)=>{
    res.send("Dashboard principal")
})



//-----------------------
app.use((req,res)=>{
    res.send("404 - Not Found")
})

*/





//Iniciar el servidor en el puerto 4000
app.listen(4000)
console.log("Web server ejecutandose en el puerto 4000")

