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
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('views', './views')
app.set('view engine','ejs')


app.get('/', (req, res) => {
 res.sendFile('index.html',{root:__dirname})
});

app.get('/signup', (req, res) => {
  res.sendFile('views/signup.html',{root:__dirname});
});

app.post("/signup", (req, res) => {

    const username=req.body.username;
    const name=req.body.fullname;
    const email = req.body.email;
    const password=req.body.pass;
    const cpass=req.body.confirm_pass;
    const role=req.body.role;
    console.log(req.body.username+ name+email+password +cpass+role);
    
    if(password==cpass){
    con.query("INSERT INTO `users` (`USERNAME`, `FULLNAME`, `EMAIL`, `USER_PASS`, `ROLE`) VALUES (?,?,?,?,?);",
    [username,name,email,cpass,role],
      (err, result) => {
        if (err) {
          console.log(err.message);
        } else {
          res.send(result);
          // console.log(result.insertId)
          console.log("value inserted succesffully as"+username+ name+email+password +cpass+role)
        }
      }
    );
    } 
  });
  

  app.get('/course', function(req, res) {
    console.log("I'm on the course page");
    var sql = "SELECT * FROM course";
    
    con.query(sql, function(error, result) {
      if (error) {
        console.log(error);
        // Handle errors here, you might want to send an error response to the client
        res.status(500).send('Internal Server Error');
      } else {
        res.render(__dirname + '/views/course.ejs', {course: result });
        
        console.log(result[0])
      }
    });
  });
  
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// app.get('/signup', (req, res) => {
//     res.sendFile(__dirname+'/signup.html');
// });

const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});