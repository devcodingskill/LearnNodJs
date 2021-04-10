const express = require('express');

const app = express();

// bind app
app.use(express.json());
//temp data for testing
const books = 
[
    {title:'Java program',id: 1 },
    {title:'C# program',id: 2 },
    {title:'NodeJs program',id: 3 },
];



/**Add End point for  */
//********get method*******/
app.get('/',(req,resp)=>
{
    resp.send('Welcome to my API')
});

app.get('/api/book',(req,resp)=>
{
    resp.send(books)

})
/**Post Method */



//set up port 
app.listen(5400);
