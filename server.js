//Part 1:

//first thing is we import dependencies:
  const express = require('express');

//set up my express app:
  const app = express(); 

//port:
  const PORT = 3000;

  //Part 2:

//establish two get routes
  //we need to GET 

  //(1)localhost:3000/api/tables
  app.get('/api/tables', (req, res) => {
    //to send back pure data, use JSON
    res.json(tableData);
  });

  //(2)localhost:3000/api/waiting-list
  app.get('/api/waiting-list', (req, res) => {
    //to send back pure data, use JSON
    res.json(waitingList);
  });