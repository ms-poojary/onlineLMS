var con=require('./conn');
var express=require('express');
var http=require('http');
const path = require('path');
const bodyparser=require('body-parser')
const ejs=require('ejs');

// const cors = require("cors");
// const { response } = require('express');


var app=express();
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('views','./views')
app.set('view engine','ejs')


app.get('/', (req, res) => {
 res.sendFile('index.html',{root:__dirname})
});

app.get('/signup', (req, res) => {
  res.sendFile('signup.html', { root: './views' });});

app.get('/login', (req, res) => {
    res.sendFile('login.html', { root: './views' });});
  
app.post("/signup", (req, res) => {
    const username=req.body.username;
    const name=req.body.fullname;
    const email = req.body.email;
    const password=req.body.pass;
    const cpass=req.body.confirm_pass;
    const role=req.body.role;
    console.log(req.body)
    if(password==cpass){
    con.query("INSERT INTO `users` (`USERNAME`, `FULLNAME`, `EMAIL`, `USER_PASS`, `ROLE`) VALUES (?,?,?,?,?);",
    [username,name,email,cpass,role],
      (err, result) => {
        if (err) {
          console.log(err.message);
        } else {
          console.log("value inserted succesffully");
          
        }
      }
    );
    } 
  });
  
// all the courses
  app.get('/courses', function(req, res) {
    console.log("I'm on the course page");
    var sql = "SELECT * FROM course";
    
    con.query(sql, function(error, result) {
      if (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
      } else {
        res.render('course', {course: result });
      }
    });
  });
  

// display course ids
app.get('/course', (req, res) => {
  const id = req.query.id;
  const sql = 'SELECT * FROM course WHERE DOMAIN_ID= ?';
  con.query(sql,[id] ,(error, result) => {
    if (error) {
        console.error('Error fetching courses:', error);
        res.status(500).send('Error fetching courses.');
    } else {
      res.render('course', {course:result });
    }
});
});



app.get('/domains', (req, res) => {
  const query = 'SELECT * FROM domain';

con.query(query, (error, result,) => {
  if (error) {
    console.error('Error fetching domains: ' + error.stack);
    return;
  }
else
  res.json(result);
});
});

// for the quizzes
app.get('/quizz', (req, res) => {
  // Example queries
  const query1 = 'SELECT * FROM questions';
  const query2 = 'SELECT * FROM answers';

  // Execute both queries
  con.query(query1, (error1, results1) => {
    if (error1) throw error1;
    else console.log(results1[0])

    con.query(query2, (error2, results2) => {
      if (error2) throw error2;
      else console.log(results2)
console.log("im get"+req.body)
      // Render the 'index' view and pass the query results as variables
      res.render('quizz', { questions: results1, answers: results2 });
    });
  });
});

app.post('/quizz', (req, res) => {
  const userid = 1;
  const userinput = req.body.option; // This should contain the selected option value
  const questionid = req.body.questid;
  let score = 0; // Assuming you have a hidden input field in your form to hold the question id
  
console.log("im body"+req.body)
  // SQL query to insert the response into the database
  const sql1 = "INSERT INTO `response` (`RESPONSE_ID`, `QUEST_ID`, `USER_ID`, `USER_CHOICE`) VALUES (NULL, ?, ?, ?)";

  // Execute the SQL query to insert the response
  con.query(sql1, [questionid, userid, userinput], (error, results) => {
      if (error) {
          console.error('Error inserting response into database:', error);
          return res.status(500).send('Error inserting response into database');
      }
    });
      // SQL query to fetch the correct answer
      const sql2 = "SELECT OPTION_ID FROM `answers` WHERE IS_CORRECT=1 AND QUEST_ID = ?";

      // Execute the SQL query to fetch the correct answer
      con.query(sql2, [1], (error, results) => {
          if (error) {
              console.error('Error fetching correct answer from database:', error);
              return res.status(500).send('Error fetching correct answer from database');
          }
          console.log('Query results:', results);
          if (results && results.length > 0) {
            // Process the results
               // Check if the user's choice matches the correct answer
          const correctAnswer = results[0].OPTION_ID;
         console.log("userinput is"+userinput+" and correct is"+correctAnswer)
          if (userinput === correctAnswer) { // Make sure to convert the values to strings for comparison
              score = 1; // Assign score 1 for correct answer
         
          }

        } else {
            console.error('No results found for the query');
            // Handle the case where no results are found
        }
        
     
          // Handle successful insertion and scoring
          res.send(`Your score: ${score}`);
       
      });
  });







const port = 8006;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});