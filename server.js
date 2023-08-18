const express = require("express")
const mysql = require("mysql")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "",
        database : "signup"
    }
)

app.post('/signup', (req, res) => {
    const insert_sql = "INSERT INTO users (`name`, `email`, `password`) VALUES (?)";
    const values = [
    req.body.name,
    req.body.email,
    req.body.password
    ]
    db.query(insert_sql, [values], (err, data) => {
        if (err) {
            console.log(err)
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const check_sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ?";
    db.query(check_sql, [req.body.email,req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length >0){
            return res.json("Success")
        } else{
            return res.json("Fail")
        }
    })
})

// app.get('/getUser/:id', (req, res) =>{
//     let id = req.params
//     const fetch_sql = "SELECT * FROM user WHERE `email` = ?";
//     db.query(fetch_sql, [req.body.email], (err, data) => {
//         if (err) {
//             return res.json("Error");
//         }
//         console.log(data)
//         return res.json(data)
//     })
// })

app.listen(8081, () => {
    console.log("Starting backend server on localhost port 8081..")
})