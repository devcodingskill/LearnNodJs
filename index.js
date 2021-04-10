const express = require('express');

const app = express();

// bind app
app.use(express.json());

const books = 
[
    {title:'Java program',id: 1 },
    {title:'C# program',id: 2 },
    {title:'NodeJs program',id: 3 },
];

app.get('/',(req,resp)=>
{
    resp.send('Welcome to my API')
});

app.listen(5400);
