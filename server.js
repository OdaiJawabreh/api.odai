const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

////////////////////////////
const Port = 9999;

// Routers
app.use("/", (req, res ) => {
try {
    res.status(200).send('#'+Math.floor(Math.random()*16777215).toString(16))
} catch (error) {
    res.status(404).json(error);
}
});



app.listen(Port, () => {
  console.log(`server is running ${Port}`);
});