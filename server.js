 import express from 'express'

 const PORT = process.env.PORT || 5000;
 const HOST = process.env.HOST || "localhost";

 const app=express()

app.get('/',(req,res)=>{
    const persona = [{id:1,nombre:"Juan",edad:23}]
    res.send(persona)
})

app.listen(PORT, () => {
  console.log(`Servidor en http://${HOST}:${PORT}`);
});