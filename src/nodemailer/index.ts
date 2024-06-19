import nodemailer from 'nodemailer'
import path from 'path'
import dotenv from 'dotenv'
import ejs from 'ejs'
import { Booking } from '../Models/Booking'
dotenv.config({path:path.resolve(__dirname,"../../.env")})

//*****************************Configuration object */
let config={
    host: 'smtp.gmail.com',
    service :'gmail',
    port :587,
    auth: {
        user: process.env.user,
        pass:process.env.password
    }
}
//**************************CREATE A TRANSPORTER********************* */
function createTransporter(config:any) {
    return nodemailer.createTransport(config)
}

//*****************************SEND EMAIL********************* */
async function sendEmail(messageOption:any){
    let transpoter=createTransporter(config)
    await transpoter.verify()
    await transpoter.sendMail(messageOption, (err, info) =>{
        if(err){
            console.log(err)
        }
        console.log(info)
    })
}
let messageOption ={
    to:process.env.EMAIL,
    from:process.env.EMAIL,
    subject:'Regestration Successful',
    html:
    `
    <h1>Welcome to </h1>
    
    `

}
// sendEmail(messageOption)
// ejs.renderFile('../templates/user.ejs', {name: 'lisa sabilah'},{err,data})=>{
    
// }



// ejs.renderFile('../templates/booking.ejs', {name: 'lisa sabilah'},{booking.id=''}.{booking.tour='diani'},{booking.hotel='OceanView'},{ booking.date='date'},{err,data})=>{

// }