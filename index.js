const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
const http = require('http');
const sendMail = require('./mail');
const sendOrder = require('./ordermail');
const details = require('./details.json');

const app = express();
app.use(cors({origin:"*"}));
app.use(bodyparser.json()); 

app.use(express.static('Murti'));
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port,()=>{
    console.log("The server started at port 3000!!!");
});

//data parsing
app.use(express.urlencoded({
    extended:false
}));
app.use(express.json());

//api to send email--
app.post('/email', (req, res) => {
    const email = req.body.email;
    const text = req.body.message;
    console.log('Data: ', req.body);

    sendMail (email,text, function(err, data) {
        if (err) {
            console.log('ERROR: ', err);
            return res.status(500).json({ message: err.message || 'Internal Error' });
        }
        console.log('Email sent!!!');
        return res.status(200).json({ message: 'Email sent!!!!!' });
    });
});
//for order mail
app.post('/orderemail', (req, res) => {
    const email = req.body.email;
    const text = req.body.message;
    console.log('Data: ', req.body);

    sendOrder(email,text, function(err, data) {
        if (err) {
            console.log('ERROR: ', err);
            return res.status(500).json({ message: err.message || 'Internal Error' });
        }
        console.log('Email sent!!!');
        return res.status(200).json({ message: 'Order Email sent!!!!!' });
    });
});

//api to navigate on whatsapp page
app.get('/whatsapp',(req,res)=>{

    const number = 919351649868;
    const url = `https://api.whatsapp.com/send?phone=${number}&text=hello sir! `
    return res.status(200).json({ message: url });
})


app.get('/',(req,res)=>{
    res.send('<h1>hello😍</h1>')
})