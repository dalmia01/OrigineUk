const express = require("express");
const app = express();
const port = process.env.PORT  || 4000;

app.listen(port,()=>{
  console.log(`server running for origineuk.co.uk on :: ${port}`);
});