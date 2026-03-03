const express = require("express");


const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send({msg:"Api respondendo na raiz do projeto"});
})
app.get("/listar",(req,res)=>{
    res.status(200).send({msg:"API respondendo na rota /listar"});
})


app.listen(5001,()=>{console.log(`Servidor online..`)})