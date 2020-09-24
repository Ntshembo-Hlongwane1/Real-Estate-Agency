const router = require("express").Router();
const Formidable = require("formidable");
const nodemailer = require("nodemailer");
require("dotenv").config();
router.post("/contact", async (request, response) => {
  const form = new Formidable.IncomingForm();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.My_Email,
      pass: process.env.My_password,
    },
  });

  form.parse(request, (error, fields, files) => {
    const { email, subject, message } = fields;

    const mailOptions = {
      from: email,
      to: process.env.My_Email,
      subject,
      html: `
        
        <h1>From: ${email}</h1>
        <h2>MESSAGE</h2>
            <h3>
                ${message}
            </h3>
      
      `,
    };
    const responsemailOptions = {
      to: email,
      from: process.env.My_Email,
      subject: "Confirmation of received message",
      html: `
            
            <h1>Hlongwane Properties</h1>
            <h3>Email has been received</h3>
            <h3>This is an automated mesaage do not reply</h3>
        `,
    };

    transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        return console.log(error);
      }
      transporter.sendMail(responsemailOptions, (error, data) => {
        if (error) {
          return console.log(error);
        }
        return response.status(200).json({ message: "Email sent" });
      });
    });
  });
});

module.exports = router;
