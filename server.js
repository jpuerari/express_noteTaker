//Part 1:
const path = require("path");
const fs = require("fs")

//first thing is we import dependencies:
  const express = require('express');

//set up my express app:
  const app = express(); 

//port:
  const PORT = 3000;

app.use(express.static('public'));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

  //Part 2:

//establish two get routes
  //we need to GET 

  //(1)localhost:3000/api/tables
  app.get('/api/notes', function(req, res){

    fs.readFile("db/db.json", "utf8", function(err, results){
      res.json(JSON.parse(results));
    })
    //to send back pure data, use JSON
  });

  app.post("/api/notes", function(req, res){
    let newNote = req.body;
    
    fs.readFile("db/db.json", "utf8", function(err, results){
      let notes = JSON.parse(results);
      //notes[notes.length -1].id
      newNote.id = 5
      notes.push(newNote)
      fs.writeFile("db/db.json", JSON.stringify(notes), function(err, result){
        res.json(newNote)
      })
    })
  })

  app.delete("/api/notes/:id", function(req, res){
    console.log(req.params.id)
    //read file
    //loop through the array
    //find the matching one, delete it from array
    //write file with new smaller array
  })

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});