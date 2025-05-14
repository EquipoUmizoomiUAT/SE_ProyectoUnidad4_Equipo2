const express = require('express')
const v1 = require('./v1/routes/routes')

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())

app.use("/api/v1", v1)

app.get("/",(req,res)=>{
    res.send(`<h1>API RESTful: Equipo 2 Proyecto</h1>`)
})

app.listen(PORT, function(){ //()=>{  //funcion flecha
    console.log(`Servidor escuchando en el Puerto: ${PORT}`);
})