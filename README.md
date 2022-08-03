# Online Book Library
Implementation of a simple online book library in JavaScript + React. The server is built on Node.js.

## Run application
1. Enter the command "npm install" in the main directory to install dependencies.
2. Enter the "npm run build" command to build the application via WebPack.
3. To start the server, enter the "npm start" command.
4. The application page will be available at "http://localhost:8080/".

## Working with the application
1. To search for a book by id, type id in the text box next to "Search by id".
2. To view the entire list of books, you need to clear the search field.

## File structure
1. The book entities are located in the /src/books.json file.
2. /src/server.js contains the code for the application server with request handling.
3. /src/index.html - application page.
4. /src/index.js - code to be executed on index.html, contains the root component.
5. /src/style.css - style sheet for index.html.
6. /src/BookTable.js contains the output table component.
7. /src/Header.js contains the page header component.
8. /src/SearchForm.js contains the search form component.
