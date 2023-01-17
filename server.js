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
    res.status(200).send('odai Taha')
} catch (error) {
    res.status(404).json(error);
}
});



app.listen(Port, () => {
  console.log(`server is running ${Port}`);
});