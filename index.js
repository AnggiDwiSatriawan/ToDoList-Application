const express = require ('express')
const mysql = require ('mysql2')
const app = express()
const port = 3030

// Create connection to database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todolist',
});
conn.connect();


// Tes port
app.listen(port, () =>{
    console.log(`This application Run on Port : ${port}`)
});

app.use(express.json());

// app.post('/login', (req, res)={


// })

app.post('/register', async function(req, res){
    const user_id = req.body.user_id;
    const name = req.body.name;

    await users.create({
        user_id,
        name,
    });
    res.json(true);
});


// app.post('/login', (req, res)={

// })

// app.post('/activity', (req, res)={

// })

// app.get('/users', (req, res)=>{
//     conn.query('SELECT * FROM user', {}, function(err, result){
//         console.log(result);
//         res.json(result);
//     });
// });

// app.get('/activity', async function(req, res){
//     const activity = await activity.findall();
//     res.json(activity);
// })


// app.get('/users', (req, res)=>{
//     conn.query('SELECT * FROM user', {}, function(err, result){
//         console.log(result);
//     });
//     res.send('ini adalah page user');
// });

// app.get('/insertactivity', (req, res)=>{
//     conn.query(`INSERT INTO activity  (activity_id, description, createdate, duedate) VALUES ('$(body.activity_id)','$(body.description)','$(body.createdate)','$(body.duedate)')`, {}, function(err, result){
//         console.log(result);
//         res.json(result);
//     });
// });