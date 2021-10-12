const express = require("express");
const app  = express();     
const port = 3000;
const userRoute = require('./routes/userRoutes');
app.use(userRoute)
app.listen(port,()=> {
    console.log(`Listening port ${port}`);
});