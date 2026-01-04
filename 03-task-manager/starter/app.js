const express = require("express");
const app = express();
const tasks = require("./routes/tasks.js");
const connectDB = require("./db/connect");
const { loadEnvFile } = require("node:process");
// Loads environment variables from the default .env file
require("dotenv");

//middlewarwe
app.use(express.static("./public"));
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

//app.get('api/v1/tasks')
//app.post('api/v1/tasks')
//app.get('api/v1/tasks/:id')
//app.patch('api/v1/tasks/:id')
//app.delete('api/v1/tasks/:id')

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.CONNECT);
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
