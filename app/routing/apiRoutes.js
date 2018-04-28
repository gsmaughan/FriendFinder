var friends = require("../data/friends");
var path = require('path');

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/friends... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);

    // console.log(res);

    
  });

  

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    
    // console.log("body object just posted", req.body);

    //find value of all scores in req array
    // for (var i = 0; i < )


    // push in the user input into the friendArray
   // friends.push(req.body);
   // console.log("req.body", req.body.scores);

   
   //GET SUM OF SCORES JUST POSTED BY USER
   var scores = req.body.scores;

   
   
   var array = scores.split(",");

   //create and push new object
   var newObj = {
    name: req.body.name,
    photo: req.body.photo,
    scores: array
   }
   friends.push(newObj);
   
   console.log("friends", friends);
   
   var justPostedSum = 0;

   for (var i = 0; i < 10; i++){
    
    justPostedSum += parseInt(array[i]);
    
   }
   console.log("justPostedSum", justPostedSum);    // THIS WORKS

   
   var friendScore = 0;
   var diffArray = [];

   // console.log("friends[1].scores[1]", friends[1].scores[1]);
   
   //GET SUM OF SCORES OF FIRST OBJECT IN FRIENDS ARRAY and push differences into an array : WORKS!!!!!!!!!!
   for(var i = 0; i < friends.length - 1; i++){

      for(var y = 0; y < 10; y++){
          friendScore += parseInt(friends[i].scores[y]);
      }
      

      console.log("friendScore", friendScore);
      var difference = Math.abs(justPostedSum - friendScore);
      console.log("difference", difference);
      diffArray.push(difference);
      friendScore = 0;
   }

   //find the lowest difference in the array
   var lowNum = Math.min.apply(null, diffArray);

   //find the index of the most suitable friend
   var index = diffArray.indexOf(lowNum);

   console.log("best match", friends[index]);   //WORKS!!!!!!!!!!!!!!!!!!!!
   console.log("friends", friends);
    


   
   




   // respond back with the best match
   res.json({name: friends[index].name, photo: friends[index].photo}); // KEY LINE


  }); //end post

  
}; //end export





//DONE DONE DONE