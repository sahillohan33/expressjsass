
const express=require('express');
const app=express();
const hostname='localhost';
const port=2401;
app.get('/random',(req,res)=>{
    const randomNumber=Math.floor(Math.random()*100);
    res.send({random:randomNumber});
});
app.listen(port,()=>{
    console.log(`Server running at ${hostname}:${port}`);
})