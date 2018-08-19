"use strict";

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
       
       let targetBook = null;
       for (let book of books) {
        if (book.id == req.params.id.slice(1, this.length)) targetBook = book; 
       }

       console.log( "Get book with id: " + req.params.id.slice(1, this.length) );
       res.status(200).json( targetBook );
    });
 })

let server = app.listen(8080, function () {

  let host = server.address().address
  let port = server.address().port

  console.log("App listening at http://%s:%s", host, port)

})