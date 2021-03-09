const express = require("express");
const app = express();
const api=require("./expressApi");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api",api);

const port = process.env.PORT || 3000;

app.listen(port,()=>{console.log(`The port is running sucessfuly at ${port}`);});
