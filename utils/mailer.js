import nodemailer from 'nodemailer'
import aws from '@aws-sdk/client-ses'

export async function mailer({ nume, email, mesaj }) {

  const ses = new aws.SES({
    apiVersion: "2010-12-01",
    region: "eu-south-1",
  })
  let transporter = nodemailer.createTransport({
    SES: { ses, aws },
  })

  const text = `
    Nume: ${nume},
    Email: ${email},
    Mesaj: ${mesaj},
  `
  const html = `
    <p>Nume: <strong>${nume}</strong></p>
    <p>Email: <strong>${email}</strong></p>
    <p>Mesaj: <strong>${mesaj}</strong></p>
  `
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Liviu.dev 👻" <noreply@liviu.dev>', // sender address
    to: "liviuzachin@gmail.com", // list of receivers
    subject: "Mesaj nou pe liviu.dev ✔", // Subject line
    text, // plain text body
    html, // html body
  })

  console.log("Message sent: %s", info.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  return info
}
