const app = require("./app");
require('dotenv').config();

const PORT = process.env.PORT || 8000;


app.get("/", (req, res) => {
    res.send("Welcome to IEEE ITM...");
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})