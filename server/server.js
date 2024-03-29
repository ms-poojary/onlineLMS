var con=require('./conn');
var express=require('express');
var http=require('http');
const path = require('path');
const bodyparser=require('body-parser')
const ejs=require('ejs');
const bcrypt=require('bcryptjs');
const session=require('express-session');
// const bcrypt = require('bcryptjs');
// const cors = require("cors");
// const { response } = require('express');


var app=express();
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('views','./views')
app.set('view engine','ejs')


app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Change to true if using HTTPS
}));
app.use((req, res, next) => {
  res.locals.loggedin = req.session.loggedin;
  res.locals.username = req.session.username;
  next();
});

// for the login /
app.get('/', (req, res) => {
  res.sendFile('login.html', { root: './views' });
});

app.post('/', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username && password) {
    con.query('SELECT * FROM users WHERE USERNAME = ?', [username], (error, results, fields) => {
      if (results.length > 0) {
          if (password==results[0].USER_PASS) {
            req.session.loggedin = true;
            req.session.username = username;
            console.log(req.session.username+" in login page")
            res.redirect('/home');
          } else {
            res.send('password doesnt match');
          } 
      } else {
        res.send('Incorrect Username and/or Password!');
      }
    });
  } else {
    res.send('Please enter Username and Password!');
  }
});


app.get('/logout', (req, res) => {
  // Destroy the session to log the user out
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      // Redirect the user to the login page or any other appropriate page
      res.redirect('/');
    }
  });
});
  // for home

  // app.get('/home',(req,res)=>{
  //   res.sendFile('index.html',{root:__dirname});
  // })
app.get('/home', (req, res) => {
    if (req.session.loggedin) {
  res.sendFile('index.html',{root:__dirname})
  console.log("im the home session"+req.session.username)
    }
    else {
      res.redirect('/');
    }
});


// for the signup
app.get('/signup', (req, res) => {
  res.sendFile('signup.html', { root: './views' });});

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const name = req.body.fullname;
    const email = req.body.email;
    const password = req.body.pass;
    const cpass = req.body.confirm_pass;
    const role = req.body.role;

    if (password === cpass) {
            var sql1 ="INSERT INTO `users` (`USERNAME`, `FULLNAME`, `EMAIL`, `USER_PASS`, `ROLE`) VALUES (?,?,?,?,?);"
                con.query(sql1,
                    [username, name, email, cpass, role],
                    (err, result) => {
                        if (err) {
                            console.error('Error inserting user:', err.message);
                            res.status(500).send('Error inserting user');
                        } else {
                            console.log("Value inserted successfully");
                            res.redirect('/');
                        }
                    }
                );
    } else {
        res.status(400).send('Passwords do not match');
    }
});


// // profile
// app.get('/profile', function(req, res) {
//     var username = res.locals.username;

//     // Query the database to fetch user enrollment details
//     var sql1 = "SELECT * FROM users NATURAL JOIN enroll WHERE USERNAME=?";
//     con.query(sql1, [username], (error, enrollResults) => {
//         if (error) {
//             console.log(error);
//             return res.status(500).json({ error: 'Error fetching user enrollment details' });
//         }

//         // Extract course ID and domain ID from enrollment results
//         var courseId = enrollResults[0].COURSE_ID;
//         var domainId = enrollResults[0].DOMAIN_ID;

//         // Query the database to fetch course details using course ID and domain ID
//         var sql2 = "SELECT * FROM course WHERE COURSE_ID = ? AND DOMAIN_ID = ?";
//         con.query(sql2, [courseId, domainId], (error, courseResults) => {
//             if (error) {
//                 console.log(error);
//                 return res.status(500).json({ error: 'Error fetching course details' });
//             }

//             // Combine enrollment and course data
//             var responseData = {
//                 user: enrollResults[0],
//                 courses: courseResults[0]
//             };

//             // Send the combined data as JSON response to the client
//             res.json(responseData);
//         });
//     });
// });

app.get('/profile', function(req, res) {
  var username = res.locals.username;

  // Query the database to fetch user enrollment details
  var sql1 = "SELECT * FROM users NATURAL JOIN enroll WHERE USERNAME=?";
  con.query(sql1, [username], (error, enrollResults) => {
      if (error) {
          console.log(error);
          return res.status(500).json({ error: 'Error fetching user enrollment details' });
      }

      // Initialize an array to store course details for all enrollments
      var coursesPromises = [];

      // Fetch course details for each enrollment
      enrollResults.forEach(enrollment => {
          var courseId = enrollment.COURSE_ID;
          var domainId = enrollment.DOMAIN_ID;

          // Push the promise of fetching course details into the array
          coursesPromises.push(new Promise((resolve, reject) => {
              var sql2 = "SELECT * FROM course WHERE COURSE_ID = ? AND DOMAIN_ID = ?";
              con.query(sql2, [courseId, domainId], (error, courseResults) => {
                  if (error) {
                      reject(error);
                  } else {
                      resolve(courseResults[0]);
                  }
              });
          }));
      });

      // Wait for all course details promises to resolve
      Promise.all(coursesPromises)
          .then(courseDetails => {
              // Combine enrollment and course data
              var responseData = {
                  user: enrollResults, // Send all enrollment details
                  courses: courseDetails // Send details of all courses
              };

              // Send the combined data as JSON response to the client
              res.json(responseData);
          })
          .catch(error => {
              console.log(error);
              return res.status(500).json({ error: 'Error fetching course details' });
          });
  });
});



app.post('/enroll', (req, res) => {
  const { courseId, domainId } = req.body;
  console.log(courseId+"and im "+domainId)
 var username=res.locals.username;
 console.log("im user id for enroll "+username);

 var sql1=`select USER_ID from users where USERNAME=?;`

 con.query(sql1,[username],(error,result) => {
  if(error) console.log(error );
  else{
   var id=result[0].USER_ID;
    var date= new Date();
    const year = date.getFullYear();
const month = date.getMonth() + 1; 
const day = date.getDate();
const Currentdate=`${year}-${month}-${day}`;

      // Insert data into the enroll table
  const sql2 = 'INSERT INTO enroll (USER_ID,DOMAIN_ID,COURSE_ID,ENROLL_DATE) VALUES (?,?,?,?)';
  con.query(sql2, [id,domainId,courseId,Currentdate], (err, result) => {
      if (err) {
          console.error(err);
          res.status(500).send('Error enrolling user');
          return;
      }
      res.status(200).send('User enrolled successfully');
  });
  }
 })
  console.log(courseId+"and im "+domainId)

});

  
// all the courses
  app.get('/courses', function(req, res) {
    console.log("this locals in course "+    res.locals.username )
    console.log(req.session.username+" from course session")
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
  console.log('this is quize sesion'+req.session.username)
  console.log('this is quize local'+res.locals.username)
  const query1 = 'SELECT * FROM questions';
  const query2 = 'SELECT * FROM answers';

  con.query(query1, (error1, results1) => {
    if (error1) throw error1;
    con.query(query2, (error2, results2) => {
      if (error2) throw error2;
      else 
      res.render('quizz', { questions: results1, answers: results2 });
    });
  });
});

app.post('/quizz', (req, res) => {
  const questionId = req.body.questionid;
  const userinput = req.body.answers;
  const username = res.locals.username; 
  const sql = `SELECT USER_ID FROM users WHERE USERNAME = ?`;

  con.query(sql, [username], (err, results) => {
      if (err) {
          console.error('Error executing SQL:', err);
          res.status(500).send('Error executing SQL');
      } else {
          if (results.length > 0) {
              const userid = results[0].USER_ID;
              console.log('User ID:', userid);
              questionId.forEach((quest) => {
                  const sql1 = "INSERT INTO `response` (`RESPONSE_ID`, `QUEST_ID`, `USER_ID`, `USER_CHOICE`) VALUES (NULL, ?, ?, ?);"
                  con.query(sql1, [quest, userid, userinput[quest - 1]], (error, results) => {
                      if (error) {
                          console.error('Error inserting value ' + quest + ': ' + error.message);
                      } else {
                          console.log('Value ' + quest + ' inserted successfully');
                      }
                  });
              });
              // const sql2 = "SELECT QUEST_ID , OPTION_ID FROM `answers` WHERE IS_CORRECT=1;";
              // const sql3 = `SELECT QUEST_ID, USER_CHOICE FROM response WHERE USER_ID = ${userid}`;

              // con.query(sql2, (error, result1) => {
              //     if (error) {
              //         console.log(error);
              //     } else {
              //         console.log(result1);
              //     }
              // });

              // con.query(sql3, (error, result2) => {
              //     if (error) {
              //         console.log(error);
              //     } else {
              //         console.log(result2);
              //     }
              // });
          } else {
              console.log('No user found with the provided username');
              res.status(404).send('User not found');
          }
      }
  });
});

app.get('/totalscore', (req, res) => {
  const username = res.locals.username; 
  const sql = `SELECT USER_ID FROM users WHERE USERNAME = ?`;
  con.query(sql, [username], (err, results) => {
      if (err) {
          console.error('Error executing SQL:', err);
          res.status(500).send('Error executing SQL');
      } else {
          if (results.length > 0) {
              const userid = results[0].USER_ID;
              console.log('User ID:', userid);

              const sql4 = `SELECT count(*) as score FROM response NATURAL JOIN answers WHERE IS_CORRECT = 1 AND USER_ID = ${userid} AND USER_CHOICE=OPTION_ID;`;
              con.query(sql4, (error, result4) => {
                  if (error) {
                      console.log(error);
                      res.status(500).send('Error fetching score');
                  } else {
                      res.json(result4[0].score);
                  }
              });
          } else {
              console.log('No user found with the provided username');
              res.status(404).send('User not found');
          }
      }
  });
});



const port = 8006;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});