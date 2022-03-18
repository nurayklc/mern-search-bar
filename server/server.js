const express = require("express");
const cors = require("cors");
const app = express();
const studentRouter = require('./routes/studentRouter')
const db = require('./db/connectDB')

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect DB
db.connetDB()

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/api', studentRouter)

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
