let express = require('express');
let app = express();
let fs = require("fs");

// get auery for all books
app.get('/api/books', function (req, res) {
   fs.readFile( __dirname + "/" + "books.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

// get query for book with specific id
app.get('/api/books:id', function (req, res) {
    fs.readFile( __dirname + "/" + "books.json", 'utf8', function (err, data) {
       let books = JSON.parse( data );
       
       let targetBook = null;
       for (let book of books) {
        if (book.id == req.params.id[1]) targetBook = book; 
       }

       console.log( targetBook );
       res.end( JSON.stringify(targetBook));
    });
 })

let server = app.listen(8080, function () {

  let host = server.address().address
  let port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})