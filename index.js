const express = require("express")
const path = require("path")
const app = express()
const nodemailer = require("nodemailer")
require("dotenv").config()
const port = process.env.PORT || 3000
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname, "/public")))
let transporter = nodemailer.createTransport({
    host: process.env.TRANSPORTER_HOST,
    port: 465,
    secure: true,
    auth: {
        user: process.env.TRANSPORTER_USER,
        pass: process.env.TRANSPORTER_PASSWORD
    }
})
app.listen(port, ()=>{
    console.log(`Listening on ${port}`)
})
app.get("/", (req, res)=>{
    res.render("welcome")
})
app.get("/home", (req, res)=>{
    res.render("home")
})
app.post("/sendEmail", async (req, res) => {
    const toSend = req.body
    let info = await transporter.sendMail({
        from: `Marcin Kuryło <me@marcinkurylo.com>`,
        to: "me@marcinkurylo.com, marcin.kurylo.lo@gmail.com",
        subject: "New message from marcinkurylo.com",
        text: `${toSend.message} - ${toSend.name} <${toSend.email}>`
    })
    res.redirect("/home")
})

