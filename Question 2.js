
const express=require('express');
const app=express();
const port=3200;
const hostname='localhost';
let counter=0;
app.get('/',(req,res)=>{
    res.send({counter});
})
app.get('/increment',(req,res)=>{
    counter++;
    res.send({counter});
});
app.get('/decrement',(req,res)=>{
    counter--;
    res.send({counter});
})
app.listen(port,()=>{
    console.log(`Server running at ${hostname}:${port}`);
});