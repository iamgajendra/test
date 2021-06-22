const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '5fa987a02f0dba774f8e9266c06c5bca-90ac0eb7-fe6348b9', // TODO: Replace with your mailgun API KEY
        domain: 'sandbox614203e4a6134fb18f31de1b52d35626.mailgun.org' // TODO: Replace with your mailgun DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendorderMail = ( email,text, cb) => {
    const mailOptions = {
        from: email, // TODO replace this with your own email
        to: 'startradingdwarka@gmail.com', // TODO: the receiver email has to be authorized for the free tier
        subject:'Order mail from www.startradingcompany.in',
        text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}

module.exports = sendorderMail;