console.log('AI Image genaror using openAi');

require('dotenv').config();

const express=require('express');
const app=express();
const port=process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
const path=require('path');
app.use(express.static(path.join(__dirname,'/public')));

//routes
app.use('/', require('./routes'));

 app.listen(port,console.log(`server listening on port ${port}`)) ;
  