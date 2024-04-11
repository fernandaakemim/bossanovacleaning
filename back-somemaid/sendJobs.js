const { OAuth2Client } = require("google-auth-library");
const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const functions = require("firebase-functions");
//require('dotenv').config();

const OAuth2 = google.auth.OAuth2;
const client_id = functions.config().emailjobs.client_id;
const client_secret = functions.config().emailjobs.client_secret;
const redirect_uri = functions.config().emailjobs.redirect_uri;
const refresh_token = functions.config().emailjobs.refresh_token;

// const client_id = process.env.EMAILCONTACT_CLIENT_ID;
// const client_secret = process.env.EMAILCONTACT_CLIENT_SECRET;
// const redirect_uri = process.env.EMAILCONTACT_REDIRECT_URI;
// const refresh_token = process.env.EMAILCONTACT_REFRESH_TOKEN;

const oAuth2Client = new OAuth2(client_id, client_secret, redirect_uri);
oAuth2Client.setCredentials({ refresh_token: refresh_token });

async function sendJobs(name, lastName, birth, nationality, email, phone, ssnItinW7, maritalStatus, zipCode, address, numberAddress, aptAddress, city, state, cleaningExperience, typeExperience,company, companyAddress, companyPhone, canContactCompany, startDateCompany, endDateCompany, referenceContact, descriptionCompany, availabilityMonStart, availabilityMonEnd, availabilityTueStart, availabilityTueEnd, availabilityWedStart, availabilityWedEnd, availabilityThuStart, availabilityThuEnd, availabilityFriStart, availabilityFriEnd, availabilitySatStart, availabilitySatEnd, availabilitySunStart, availabilitySunEnd, drive, car, english, difficultyCleaning, meetUs, whyUs, termsPolicy) {
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
            from: '"Recruitment - Bossa Nova Cleaning Atlanta" <akemi@bossanovacleaning.com>',
            to: 'akemi@bossanovacleaning.com',
            subject: "Someone is applying",
            html: `
            <h2>Someone is applying via the jobs page</h2>
            <h3><strong>Candidate data:</strong></h3>
            <p><strong>Name:</strong> ${name} ${lastName}</p>
            <p><strong>Date of birth:</strong> ${birth}</p>
            <p><strong>Nationality:</strong> ${nationality}</p>
            <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Do you have SSN, ITIN or W7?</strong> ${ssnItinW7}</p>
            <p><strong>Marital status:</strong> ${maritalStatus}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Number:</strong> ${numberAddress}</p>
            <p><strong>Apt:</strong> ${aptAddress}</p>
            <p><strong>Zip Code:</strong> ${zipCode}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>State:</strong> ${state}</p>
            <br>
            <br>
            <h4><strong>Work Experience</strong></h4>
            <p><strong>Have any professional house cleaning experience?</strong> ${cleaningExperience}</p>
            <p><strong>Company or Independent:</strong> ${typeExperience}</p>
            <p><strong>Company name:</strong> ${company}</p>
            <p><strong>Company address:</strong> ${companyAddress}</p>
            <p><strong>Company phone:</strong> ${companyPhone}</p>
            <p><strong>Can we contact them for references?</strong> ${canContactCompany}</p>
            <p><strong>How long have you worked for this company?</strong> ${startDateCompany} - ${endDateCompany}</p>
            <p><strong>Reference contact:</strong> ${referenceContact}</p>
            <p><strong>Brief description of your experience in this
            company:</strong> ${descriptionCompany}</p>
            <br>
            <br>
            <h4>Availability</h4>
            <p><strong>Monday:</strong> ${availabilityMonStart} - ${availabilityMonEnd}</p>
            <p><strong>Tuesday:</strong> ${availabilityTueStart} - ${availabilityTueEnd}</p>
            <p><strong>Wednesday:</strong> ${availabilityWedStart} - ${availabilityWedEnd}</p>
            <p><strong>Thursday:</strong> ${availabilityThuStart} - ${availabilityThuEnd}</p>
            <p><strong>Friday:</strong> ${availabilityFriStart} - ${availabilityFriEnd}</p>
            <p><strong>Saturday:</strong> ${availabilitySatStart} - ${availabilitySatEnd}</p>
            <p><strong>Sunday:</strong> ${availabilitySunStart} - ${availabilitySunEnd}</p>
            <p><strong>Do you drive?</strong> ${drive}</p>
            <p><strong>Do you have your own car?</strong> ${car}</p>
            <p><strong>Do you speak english?</strong> ${english}</p>
            <p><strong>Have any allergies, asthma or similar conditions that would make house cleaning difficult?</strong> ${difficultyCleaning}</p>
            <p><strong>How did you met us?</strong> ${meetUs}</p>
            <p><strong>Why would you want to work with us?</strong> ${whyUs}</p>
            <p><strong>Do you accept our Terms of Use and Privacy Policy? </strong> ${termsPolicy}</p>            
            `
        });

        console.log(info);
    } catch (error) {
        console.error(error);
    }
}

module.exports = sendJobs;
