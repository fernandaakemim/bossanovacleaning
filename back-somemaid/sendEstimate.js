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

async function sendEstimate(name, email, phone, zipcode, address, numberAddress, aptAddress, suite, city, state, property, service, propertySize, beds, baths, people, pets, frequency) {
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
            from: '"Estimate request - Bossa Nova Cleaning Atlanta" <akemi@bossanovacleaning.com>',
            to: 'akemi@bossanovacleaning.com',
            subject: "Estimate request",
            html: `
            <h2>This customer request a estimate</h2>
            <h3><strong>Customer data:</strong></h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Zipcode:</strong> ${zipcode}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Number:</strong> ${numberAddress}</p>
            <p><strong>Apt:</strong> ${aptAddress}</p>
            <p><strong>Suite:</strong> ${suite}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>State:</strong> ${state}</p>
            <p><strong>Type of property:</strong> ${property}</p>
            <p><strong>Type of service:</strong> ${service}</p>
            <p><strong>Property size (sq ft):</strong> ${propertySize}</p>
            <p><strong>Number of bedrooms:</strong> ${beds}</p>
            <p><strong>Number of bathrooms:</strong> ${baths}</p>
            <p><strong>Number of people living in your property:</strong> ${people}</p>
            <p><strong>Number of pets:</strong> ${pets}</p>
            <p><strong>Frequency:</strong> ${frequency}</p>
            `
        });

        console.log(info);
    } catch (error) {
        console.error(error);
    }
}

module.exports = sendEstimate;
