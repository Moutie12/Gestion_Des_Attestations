const express = require('express');

require('./connect');
const cors = require('cors');
const admin = require('./admin');
const certificate = require('./certificate');
app = express() ;

app.use(express.json());
app.use(cors());

app.post('/addadmin',async (req,res)=>{
    try{
        data = req.body ;
        usr = new admin(data);
        savedAdmin = await usr.save() ;
        res.send(savedAdmin);
    }catch(err)
    {
        res.send(err);
    }
})

app.post('/verifyadmin' , (req,res)=>{
    data = req.body ;
    email = data['email'];
    password = data['password'];
    console.log(email);
    console.log(password);
    admin.findOne({email:email , password:password})
        .then(
            (resultat)=>{
                if(resultat)
                {
                    console.log(resultat);
                    res.send(true);
                }else{
                    res.send(false)
                }
            }
        )
        .catch(
            (error)=>{
                res.send(error);
            }
        )
})

app.post('/addcertificates',(req,res)=>{
    data = req.body ;
    usr = new certificate(data);
    usr.save()
        .then(
            (resultat)=>{
                console.log(resultat);
            }
        )
        .catch(
            (err)=>{
                console.log(err);
            }
        )
})

app.listen( 3000 , ()=>{
    console.log('server works');
})