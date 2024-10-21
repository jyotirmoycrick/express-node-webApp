const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Default to 3000 if PORT isn't set

app.get("/", (req, res) => {  
    res.send("Hello, World!"); // Basic route to test the server
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
