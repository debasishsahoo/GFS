require('./db/mongo.connection')
const express=require('express')

const app=express()

app.use('/api/health-check',(req,res)=>{res.send('App is Working')});

app.listen(5000,()=>console.log(`Server is Stared on http://localhost:5000`))