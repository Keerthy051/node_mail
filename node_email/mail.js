const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'keerthyb.ug20.cs@mtec.ac.in',
        pass: 'keerthysingh'
    }
});
var mailForm = {
    from : 'keerthyb.ug20.cs@mtec.ac.in',
    to: 'keerthyb.ug21.cs@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'    
};
transporter.sendMail(mailForm,function(err,info){
if (err) {
    console.log(err);
  } else {
    console.log('Email sent: ' + info.response);
  }
});