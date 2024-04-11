const { OAuth2Client } = require("google-auth-library");
const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const functions = require("firebase-functions");
//require('dotenv').config();

const OAuth2 = google.auth.OAuth2;
const client_id = functions.config().emailcontact.client_id;
const client_secret = functions.config().emailcontact.client_secret;
const redirect_uri = functions.config().emailcontact.redirect_uri;
const refresh_token = functions.config().emailcontact.refresh_token;

// const client_id = process.env.EMAILCONTACT_CLIENT_ID;
// const client_secret = process.env.EMAILCONTACT_CLIENT_SECRET;
// const redirect_uri = process.env.EMAILCONTACT_REDIRECT_URI;
// const refresh_token = process.env.EMAILCONTACT_REFRESH_TOKEN;

const oAuth2Client = new OAuth2(client_id, client_secret, redirect_uri);
oAuth2Client.setCredentials({ refresh_token: refresh_token });

async function sendContact(name, email, subject, message) {
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "akemi@bossanovacleaning.com",
                clientId: client_id,
                clientSecret: client_secret,
                refreshToken: refresh_token,
                accessToken: accessToken
            }
        })

        //SEND MAIL WITH DEFINED TRANSPORT OBJECT
        let info = await transporter.sendMail({
            from: '"Contact - Bossa Nova Cleaning Atlanta" <akemi@bossanovacleaning.com>',
            to: 'akemi@bossanovacleaning.com',
            subject: "A customer contacted",
            html: `
            <h2>A customer contacted us via the contact page</h2>
            <h3><strong>Customer data:</strong></h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Reason for contact:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
            `
        });

        console.log(info);
    } catch (error) {
        console.error(error);
    }
}

module.exports = sendContact;
