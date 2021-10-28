const express = require('express');
const { request } = require('http');
const app = express();
const nodemailer = require("nodemailer");
const { getMaxListeners } = require('process');

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) =>{
    //point this to home page and contact page
    //res.sendFile(__dirname + '/public/src/contact.html');
    res.sendFile(__dirname + '/public/src/index.html');
})

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            //Change this email and password when going to live production
            user: 'helpdesk.artemisprime@gmail.com',
            //Store this in an environment variable when going to production
            pass: 'Agape8246!'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'helpdesk.artemisprime@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    })
})

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})