// import { google } from 'googleapis';
const google = require('googleapis');

async function sendVerificationCode (req, res) {
    const {phoneNumber, recaptchaToken } = req.body;
    
    const identityToolkit = google.identitytoolkit({
        auth: process.env.FIREBASE_API_SECRET,
        version: 'v3'
    });

    const response = await identityToolkit.relyingparty.sendVerificationCode({
        phoneNumber,
        recaptchaToken: recaptcha,
    })

    const sessionInfo = response.data.sessionInfo;
    console.log(sessionInfo)
}


module.exports = sendVerificationCode;