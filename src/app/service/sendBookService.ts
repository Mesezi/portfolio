var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  service: "gmail",
  auth: {
      user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      pass: process.env.NEXT_PUBLIC_NODEMAILER_PW,
    },
  });


// interface BookMail{
//     subject:string;
//     toEmail:string;
//     text: any
// }
// export async function sendBookService(subject:string, toEmail:string, text:any) {
  
//   const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: true,
//   service: "gmail",
//   auth: {
//       user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
//       pass: process.env.NEXT_PUBLIC_NODEMAILER_PW,
//     },
//   });

//   const mailOptions = {
//     from: `"Stephanie Chizoba Odili" <${process.env.NEXT_PUBLIC_NODEMAILER_EMAIL}>`,
//     to: toEmail,
//     subject: subject,
//     html:text,
//   };

//   return new Promise((resolve, reject) => {
//       transporter.sendMail(mailOptions, function(error: any, info: unknown) {
//           if (error) {
//               reject(error); // Reject with the error
//           } else {
//               resolve(info); // Resolve with the info object
//           }
//       });
//   });

// }

