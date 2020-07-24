const express = require('express');
const app = express();
const PORT = 7375;
const db = require('../database/query.jsx');
const path = require('path')

const bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('../App.js'));


app.get("/photos", (req, res)=>{
    console.log('hello')
   db.getPhotos( (err, result)=>{
     if (err){
       console.log(err)
       res.send(err, null)
     } else {
       console.log(result)
       res.status(200).send(result)
     }
   })
   });

   app.get("/region", (req, res)=>{
   db.getRegionPhotos( (err, result)=>{
     if (err){
       console.log(err)
       res.send(err, null)
     } else {
       console.log(result)
       res.status(200).send(result)
     }
   })
   });
   app.get("/name", (req, res)=>{
     console.log(req.body.data)
    db.getRegionName(req.body.data, (err, result)=>{
      if (err){
        console.log(err)
        res.send(err, null)
      } else {
        console.log(result)
        res.status(200).send(result)
      }
    })
    });

app.listen(PORT, (err, results)=> {
    if(err) {
        console.log('error listening on server', err)
    } else {
        console.log(`listening on port: ${PORT}`)
    }
})