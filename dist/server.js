// "use strict";

let express = require('express');
let app = express();
let fs = require("fs");

// get index.html
app.get('/', function (req, res) {
    console.log("Get index.html");
    res.sendFile(__dirname + '/index.html');
});

// get auery for all books
app.get('/api/books', function (req, res) {
   fs.readFile( __dirname + "/" + "books.json", 'utf8', function (err, data) {
       console.log( "Get all books" );

       let books = JSON.parse(data);
       res.status(200).json( books );
   });
})

// get query for book with specific id
app.get('/api/books:id', function (req, res) {
    fs.readFile( __dirname + "/" + "books.json", 'utf8', function (err, data) {
       let books = JSON.parse( data );
       
       let targetBook = [];
       let id = req.params.id.slice(1, req.params.id.length);
       
       let bookFound = false;

       for (let book of books) {
        if (String(book.id) == id) {
            targetBook.push(book);
            bookFound = true;
        } 
       }
       
       if (bookFound) {
            console.log( "Get book with id: " + id);
            res.status(200).json( targetBook );
       } else {
            console.log( "Book with id: " + id + " doesn't exist");
            res.status(200).json( null );
       }
       
    });
 })

//  // get query for stylesheet
//  app.get('/css/style.css', function (req, res) {
//     res.sendFile( __dirname + "/css/style.css");
//  })

let server = app.listen(8080, function () {

  let host = server.address().address
  let port = server.address().port

  console.log("App listening at http://%s:%s", host, port)

})