let express = require('express');
let app = express();
let fs = require("fs");

// get auery for all books
app.get('/api/books', function (req, res) {
   fs.readFile( __dirname + "/" + "books.json", 'utf8', function (err, data) {
       console.log( "Get all books" );

       let books = JSON.parse(data);
       res.json( books );
   });
})

// get query for book with specific id
app.get('/api/books:id', function (req, res) {
    fs.readFile( __dirname + "/" + "books.json", 'utf8', function (err, data) {
       let books = JSON.parse( data );
       
       let targetBook = null;
       for (let book of books) {
        if (book.id == req.params.id.slice(1, this.length)) targetBook = book; 
       }

       console.log( "Get book with id: " + req.params.id.slice(1, this.length) );
       res.json( targetBook );
    });
 })

let server = app.listen(8080, function () {

  let host = server.address().address
  let port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})