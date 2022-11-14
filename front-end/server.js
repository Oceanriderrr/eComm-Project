const express = require("express");

const app = express();

app.use("/user/",require("../back-end/routes/user"))

app.get("/" , function(req,res){
    res.send("Express Here")
})

app.listen(3001, function(){
    console.log("express server is running on port 3001")
})