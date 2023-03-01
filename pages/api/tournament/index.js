export default function handler(req, res) {
    let nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.GMAIL_LOGIN,
            pass: process.env.GMAIL_PASSWORD
        },
        secure: true,
    })

    const obj = JSON.parse(req.body);
    const mailData = {
        from: process.env.GMAIL_LOGIN,
        to: process.env.GMAIL_SEND_TO,
        subject: `Message From ${obj.name}`,
        text: obj.message + " | Sent from: " + obj.email,
        html: `
        <div>${obj.message}</div>
        <p>Sent from: ${obj.email}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {

    })
    res.send('success')
}