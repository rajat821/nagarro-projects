require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}))

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'mysqlconn'
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected to database!")
});

con.query('create table if not exists mysqlconn.itmes (data varchar(255));',(err)=>{
    if(err) throw err;
})

app.get("/", (req, res) => {
    con.query('select data from mysqlconn.itmes',(err,rows)=>{
            const items = Object.values(JSON.parse(JSON.stringify(rows)));
            res.render("index",{items});
    })
});

app.post('/',(req,res)=>{
    const {itemName} = req.body;
    con.query(`insert into mysqlconn.itmes values ('${itemName}')`,(err,res)=>{
        if(err)
            console.log(err);
    })
    res.redirect('/')
})

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);