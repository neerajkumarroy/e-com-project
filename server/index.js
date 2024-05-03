require("./DB/config.js");
const express = require("express");
const PORT = process.env.PORT||4000;
const app = express();
const cors = require("cors");
const Usr_route = require("./Routes/User.js");
const product_route = require('./Routes/Product.js');

app.use(express.json());
app.use(cors());

app.use("/api", Usr_route)
app.use("/api",product_route);



app.listen(PORT,()=>{
    console.log(`This App is running on the port number ${PORT}`);
})
