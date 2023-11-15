const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Yob1#ab1",
  database: "airlinedatabase",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM passengers";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.post("/api/post", (req, res) => {
  const {firstname, lastname, phoneno, id, miles } = req.body;
  const sqlInsert =
    "INSERT INTO passengers (FirstName, Lastname, PhoneNumber, PassengerId, Miles_on_Passenger  ) VALUES (?, ?, ?, ?, ?)";
  db.query(sqlInsert, [firstname, lastname, phoneno, id, miles], (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

app.delete("/api/remove/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM passengers WHERE PassengerId = ?";
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

app.get("/api/get/:id", (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM passengers WHERE PassengerId = ?";
  db.query(sqlGet, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

app.put("/api/update/:id", (req, res) => {
  const { id } = req.params;
  const {firstname, lastname, phoneno, miles } = req.body;
  const sqlUpdate = "UPDATE passengers SET FirstName = ?, Lastname = ?, PhoneNumber = ?,Miles_on_Passenger = ?  WHERE PassengerId = ?";
  db.query(sqlUpdate, [firstname, lastname, phoneno, miles ], (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

app.get("/", (req, res) => 
{
// const sqlInsert = 
//               "INSERT INTO passengers (ï»¿FirstName, Lastname, PhoneNumber, PassengerId, Miles_on_Passenger ) VALUES ('Amy','May', 555555, 111111, 1200)";
// db.query(sqlInsert, (error, result)=>{
//   console.log("error", error);
//   console.log("result", result);
//   res.send("hELLO");
//   }); 
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });