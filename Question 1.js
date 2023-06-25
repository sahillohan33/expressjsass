const http=require('http');
const menProducts=[
    {id:1,name:'Men Products 1',price:25.99,color:'yellow',size:'M'},
    {id:2,name:'Men Products 2',price:35.99,color:'green',size:'L'},
    {id:3,name:'Men Products 3',price:55.99,color:'white',size:'XL'},
    {id:4,name:'Men Products 4',price:45.99,color:'brown',size:'M'},
    {id:5,name:'Men Products 5',price:15.99,color:'blue',size:'XL'},
    {id:6,name:'Men Products 6',price:65.99,color:'pink',size:'L'},
    {id:7,name:'Men Products 7',price:95.99,color:'white',size:'XL'},
    {id:8,name:'Men Products 8',price:35.99,color:'red',size:'M'},
    {id:9,name:'Men Products 9',price:95.99,color:'black',size:'L'},
    {id:10,name:'Men Products 10',price:65.99,color:'navyblue',size:'XL'},
];
const womenProducts=[
    {id:1,name:'Women Product 1',price:12.99,color:'red',size:'M'},
    {id:2,name:'Women Product 2',price:32.99,color:'blue',size:'XL'},
    {id:3,name:'Women Product 3',price:45.99,color:'green',size:'L'},
    {id:4,name:'Women Product 4',price:19.99,color:'white',size:'XL'},
    {id:5,name:'Women Product 5',price:29.99,color:'black',size:'M'},
    {id:6,name:'Women Product 6',price:34.99,color:'navyblue',size:'L'},
    {id:7,name:'Women Product 7',price:32.99,color:'orange',size:'M'},
    {id:8,name:'Women Product 8',price:12.99,color:'pink',size:'XL'},
    {id:9,name:'Women Product 9',price:20.99,color:'orange',size:'L'},
    {id:10,name:'Women Product 10',price:39.99,color:'black',size:'N'},
];
const server=http.createServer((req,res)=>{
       if(req.url==='/'){
        res.writeHead(200,{'content-type':'text/plain'});
        res.end('welcome to men and women dummy data');
       }
       else if(req.url==='/men'){
        res.writeHead(200,{'content-type':'application/json'});
        res.end(JSON.stringify(menProducts));
       }
       else if(req.url==='/women'){
        res.writeHead(200,{'content-type':'application/json'});
        res.end(JSON.stringify(womenProducts));
       }
       else{
        res.writeHead(200,{'content-type':'text/plain'});
        res.end('Page Not Found');
       }
});
const port=3000;
server.listen(port,()=>{
    console.group(`Server running on port ${port}`);
});
