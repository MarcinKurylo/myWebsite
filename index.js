const express = require("express")
const path = require("path")
const app = express()
const nodemailer = require("nodemailer")
const cookieParser = require("cookie-parser")
const cookieSession = require("cookie-session")
const {randomBytes} = require("crypto")

require("dotenv").config()
const port = process.env.PORT || 3000
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname, "/public")))
app.use(cookieParser())
app.use(cookieSession({
    name: "csrf",
    secret: process.env.COOKIE_SECRET,
    maxAge: 24*60*60*1000,
    sameSite: "lax"
}))
let transporter = nodemailer.createTransport({
    host: process.env.TRANSPORTER_HOST,
    port: process.env.TRANSPORTER_PORT,
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
    if (req.session.csrf === undefined){
        console.log("here")
        req.session.csrf = randomBytes(100).toString("base64")
    }
    res.render("home")
})
app.post("/sendEmail", async (req, res) => {
    if (!req.session.csrf || req.body.csrf !== req.body.csrf){
        return res.send("xDD")
    }
    const toSend = req.body
    let info = await transporter.sendMail({
        from: `Marcin Kuryło <me@marcinkurylo.com>`,
        to: "me@marcinkurylo.com, marcin.kurylo.lo@gmail.com",
        subject: "New message from marcinkurylo.com",
        text: `${toSend.message} - ${toSend.name} <${toSend.email}>`
    })
    res.redirect("/home")
})

