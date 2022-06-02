var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service:'gmail',
  auth:{
    user:'someone@gmail.com',
    pass:''
  }
});

var mailOptions={
  from:'someone@gmail.com',
  to:'someone@gmail.com',
  subject:'someone@gmail.com',
  text:'someone@gmail.com'
};
transporter.sendMail(mailOptions, function(err, info){
  if (err){
    console.log('ERROR');
  }
  else{
    console.log("EMail sent"+info.response);
  }
});