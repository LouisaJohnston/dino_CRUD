// Required modules
const express = require('express')

// Variables
// Invoke
const app = express();
const PORT = 3000;

// Routes
app.get('/', (req, res) => {
    res.send('Hello World! ooo')
})

// Start the sever
// Call back function
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})