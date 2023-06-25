const express=require('express');
const app=express();
const port=2400;
const hostname='localhost';
app.get('/',(req,res)=>{
    res.send({msg:'I am Home Page'});
});
app.get('/about',(req,res)=>{
    res.send({msg:'I am About Page'});
});
app.get('/contact',(req,res)=>{
    res.send({email:'support@pwskills.com'});
})
app.listen(port,()=>{
    console.log(`Server running at ${hostname}:${port}`);
});
