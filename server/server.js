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
    // else console.log(results1[0])

    con.query(query2, (error2, results2) => {
      if (error2) throw error2;
      else 
      // Render the 'index' view and pass the query results as variables
      res.render('quizz', { questions: results1, answers: results2 });
      // console.log(results1);
    });
  });
});


app.post('/quizz',(req,res)=>{
 const userid=2;
 const questionId=req.body.questionid;
 const userinput=req.body.answers;
 formdata=req.body;
 console.log(questionId)
 
//  console.log(formdata)
console.log("this is userinput "+userinput)

 questionId.forEach((quest) => {
  console.log(quest)
  const sql1 = " INSERT INTO `response` (`RESPONSE_ID`, `QUEST_ID`, `USER_ID`, `USER_CHOICE`) VALUES (NULL, ?, ?, ?);"
  con.query(sql1, [quest,userid,userinput[quest-1]], (error, results) => {
      if (error) {
          console.error('Error inserting value ' + quest + ': ' + error.message);
          return;
      }
      console.log('Value ' + quest + ' inserted successfully');
  });
});

const sql2= "select QUEST_ID , OPTION_ID from `answers` where IS_CORRECT=1;"

const sql3 = `SELECT QUEST_ID, USER_CHOICE FROM response WHERE USER_ID = ${userid}`;

con.query(sql2,(error,result1)=>{
  if(error){
    console.log(error);
  }
  else
  console.log(result1)
})
con.query(sql3,(error,result2)=>{
  if(error){
    console.log(error);
  }
  else
  console.log(result2)
})

});

app.get('/totalscore',(req,res)=>{
  var userid=2;
  const sql4 =`SELECT count(*) as score FROM response NATURAL JOIN answers WHERE IS_CORRECT = 1 AND USER_ID = ${userid} AND USER_CHOICE=OPTION_ID;`
con.query(sql4,(error,result4)=>{
    if(error){
      console.log(error);
    }
    else
  res.json(result4[0].score);
  console.log(result4[0].score)
  })
})

// app.get('/deleteresponse',(req,res)=>{
//   var userid=2;
//   const sql=`DELETE FROM response WHERE USER_ID = ${userid};`
//   con.query(sql,(error,result)=>{
//     if(error) console.log(error);
//     else console.log("deleted succesfull "+result)
    
//   })
// })

const port = 8006;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});