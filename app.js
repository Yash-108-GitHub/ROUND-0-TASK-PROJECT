const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require("./routes/user.js")
const dashboardRouter = require("./routes/dashboard.js");
const taskRouter = require("./routes/task.js");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine","ejs");

const MONGO_URL =
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017/intern-assignment";

  
main()
 .then(()=>{
    console.log("connected to DB");
 })
 .catch((err)=>{
    console.log(err);
 })

async function main(){
   await mongoose.connect(MONGO_URL);
}


//Implementing routers
app.use("/", userRouter);
app.use("/", dashboardRouter);
app.use("/",taskRouter);


app.get("/", (req, res)=>{
    res.render("index.ejs");
})

app.use((err, req, res ,next)=>{
    let {statusCode=500, message="something went wrong!"} = err;
    res.status(statusCode).send(message);
})

app.listen(3000, ()=>{
    console.log("app is listening on port 3000");
})
