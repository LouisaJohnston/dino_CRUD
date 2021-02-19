// Required modules
const express = require("express");
const rowdy = require("rowdy-logger");
const db = require("./models");

// Variables
// Invoke
const app = express();
const PORT = 3000;
const rowdyResults = rowdy.begin(app);

// Middleware
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.send("Hello World! ooo");
});

// CRUD routes for dinos
app.get("/dinos:id", async (req, res) => {
  try {
    const dino = await db.dino.findAll();
    res.send(dino);
  } catch (err) {
    console.log(err);
  }
});

app.post("/dinos", async (req, res) => {
  try {
    const newDino = await db.dino.create({
      name: req.body.name,
      type: req.body.type,
    });
    res.send(newDino);
  } catch (err) {
    console.log(err);
  }
});

// Show (show one) route
app.get("/dinos/:id", async (req, res) => {
  try {
    const dino = await db.dino.findByPk(req.params.id);
    res.send(dino);
  } catch (err) {
    console.log(err);
  }
});

app.put("/dinos/:id", async (req, res) => {
  try {
    const dino = await db.dino.findByPk(req.params.id);
    const updatedDino = await dino.update({
      name: req.body.name,
      type: req.body.type,
    });
    res.send(updatedDino);
  } catch (err) {
    console.log(err);
  }
});

// Start the sever
// Call back function
app.listen(PORT, () => {
  rowdyResults.print();
  console.log(`Server is listening on port ${PORT}`);
});
