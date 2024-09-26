const express=require('express');
const mongoose = require('mongoose');
const todoRouter=require('./routes');
require('dotenv').config();
const app=express();
app.use(express.json());

const MONGODB_URI=process.env.MONGODB_URI;
// const MONGODB_URI='mongodb://localhost:27017/todoApp';//localhost:27017/todoApp

const PORT=process.env.PORT||3000;
mongoose.connect(MONGODB_URI)
.then(()=>{

    console.log('Connected to the MongoDB database');
})
.catch((error)=>{

    console.error('Failed to connect to MongoDB',error);
})

app.use('/',todoRouter);
 
app.get('/',(req,res)=>{
res.send("Welcome to the todoApp");
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT,()=>{

    console.log(`Server is running on PORT ${PORT}`);
} );



