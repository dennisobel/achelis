const nodemailer = require('nodemailer')
const secret = require('../config/secret')

let mailer = (output) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        /*
        host: 'mail.dukachapchap.co.ke',
        port: 25,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'akl@dukachapchap.co.ke', // generated ethereal user
            pass: 'donstefan92'  // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }
        */
       service:'gmail',
       auth:{
           user:secret.user,
           pass:secret.pass
       }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Achelis New Booking Information" <achelis@achelis-group.com>', // sender address
        to: ['achelis@achelis-group.com','digital@achelis-group.com','ogembodenis2016@gmail.com','conradck@gmail.com'], // list of receivers
        subject: 'Achelis Kenya LTD', // Subject line
        text: 'Hi,', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.render('contact', {msg:'Email has been sent'});
    });
}

module.exports = mailer;
