const express = require("express");
const db = require("./routes/db-config");
const app = express();
const cookie = require("cookie-parser");

app.use("/script", express.static(__dirname + "/public/script"))
app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(cookie());
app.use(express.json());
db.connect((err)=>{
    if(err) throw err;
    console.log("Database Connected");
})
app.use("/", require("./routes/pages"));
app.use("/api", require("./controllers/auth"));
app.listen(5000);
