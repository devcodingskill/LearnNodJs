const express = require('express');

const app = express();

// bind app
app.use(express.json());
//temp data for testing
const books = 
[
    {title:'Java program',id:1 },
    {title:'C# program',id:2 },
    {title:'NodeJs program',id:3 },
];



/**Add End point for  */
//********get method*******/
app.get('/',(req,resp)=>
{
    resp.send('Welcome to my API')
});

app.get('/api/books',(req,resp)=>
{
    resp.send(books)
})

app.get('/api/book/:id',(req,resp)=>
{
    const book = books.find(i=>i.id === parseInt(req.params.id))
    if(!book)
    resp.status(404).send('books not found')
    else
    resp.send(book)
})
/**Post Method */
app.post('/api/book/addBook',(req,resp)=>
{
    const book = 
    {
        id: books.length+1,
        title: req.body.title
    }
    books.push(book)
    resp.send(book)

})
/**Put method (update) */
app.put('/api/book/:id',(req,resp)=>
{
    const book = books.find(i=>i.id === parseInt(req.params.id))
    if(!book)
    resp.status(404).send('books not found')
    else
    {
       book.title =req.body.title
       resp.send(book)
    }

})
/**Delete method */
app.delete('/api/book/:id',(req,resp)=>
{
    const book = books.find(i=>i.id === parseInt(req.params.id))
    if(!book)
    resp.status(404).send('books not found')
    else
    {
       const index = books.indexOf(book)
       books.splice(index,1)
       
       resp.send(book)
    }
})


//set up port 
app.listen(5400);
