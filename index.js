const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;


app.use(express.json())
app.use(express.urlencoded({extended:true}))

const { FieldValue } = require('firebase-admin/firestore')
const { db } = require('./firebase.js')

app.post('/addMechanic', async (req, res) => {
    try{
        console.log(req.body);
        const id = req.body.firstName;
        const mechanicDataJson ={
            carBrands : req.body.carBrands,
            services: req.body.services,
            firstName : req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber : req.body.phoneNumber,
            address : req.body.address,
            serviceStatus : req.body.serviceStatus
        };
        const response = await db.collection("services").add(mechanicDataJson);
        res.send(response);
        console.log("Data has been Inserted Successfully");
    }catch(error){
        res.send(error);
    }
})

app.post('/addRequest', async (req, res) => {
    try{
        console.log(req.body);
        const id = req.body.firstName;
        const requestJson ={
            request : req.body.request,
            services: req.body.services,
            firstName : req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber : req.body.phoneNumber,
            address : req.body.address,
            serviceServed : req.body.serviceServed
        };
        const response = await db.collection("requests").add(requestJson);
        res.send(response);
        console.log("Data has been Inserted Successfully");
    }catch(error){
        res.send(error);
    }
})

app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
})