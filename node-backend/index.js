const express = require("express");
const { connection } = require("./configs/mongoose.connection");
const { BlogModel } = require("./models/blog.model");
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const response = await fetch(
      "https://blogs-backend-mwq4.onrender.com/api/blogs"
    );
    const data = await response.json();
    // console.log("YESSS!!", data.data);
    console.log("REQUEST BODY!!!", req.body.name);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send("Some error occurred");
  }
});

app.get("/add", async (req, res) => {
  try {
    const response = await fetch(
      "https://blogs-backend-mwq4.onrender.com/api/blogs"
    );
    const data = await response.json();
    // const blog = new BlogModel({ data: data.data });
    // await blog.save();
    res.send("Blogs Added");
  } catch (error) {
    console.log(error);
    res.send("Some error occurred");
  }
});

app.listen(3030, async () => {
  console.log("Serving at http://localhost:3030");
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error While connecting to database");
    console.log(error);
  }
});
