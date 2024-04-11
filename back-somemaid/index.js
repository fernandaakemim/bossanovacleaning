const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const sendContact = require("./sendContact.js");
const sendEstimate = require("./sendEstimate.js");
const sendJobs = require("./sendJobs.js");
const path = require("path");

const app = express();
app.use(cors({ origin: true }));
  
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.json());

// Rota para servir o arquivo index.html quando o site for aberto
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
  });

app.post('/send-email-contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    sendContact(name, email, subject, message)
    .then(() => {
        res.send("Email successfully sent!");
    })
    .catch((error) => {
        console.error('Error sending the e-mail: ', error);
        res.status(500).send("Error sending the e-mail");
    });
});

app.post('/send-email-estimate', (req, res) => {
    const { name, email, phone, zipcode, address, numberAddress, aptAddress, suite, city, state, property, service, propertySize, beds, baths, adult, kids, pets, frequency } = req.body;

    sendEstimate(name, email, phone, zipcode, address, numberAddress, aptAddress, suite, city, state, property, service, propertySize, beds, baths, adult, kids, pets, frequency)
    .then(() => {
        res.send("Resquest estimate successfully sent!");
    })
    .catch((error) => {
        console.error('Error sending the form: ', error);
        res.status(500).send("Error sending the form");
    })
})

app.post('/send-email-jobs', (req, res) => {
    const { name, lastName, birth, nationality, email, phone, ssnItinW7, maritalStatus, zipCode, address, numberAddress, aptAddress, city, state, cleaningExperience, typeExperience, company, companyAddress, companyPhone, canContactCompany, startDateCompany, endDateCompany, referenceContact, descriptionCompany, availabilityMonStart, availabilityMonEnd, availabilityTueStart, availabilityTueEnd, availabilityWedStart, availabilityWedEnd, availabilityThuStart, availabilityThuEnd, availabilityFriStart, availabilityFriEnd, availabilitySatStart, availabilitySatEnd, availabilitySunStart, availabilitySunEnd, drive, car, english, difficultyCleaning, meetUs, whyUs, termsPolicy } = req.body;

    sendJobs(name, lastName, birth, nationality, email, phone, ssnItinW7, maritalStatus, zipCode, address, numberAddress, aptAddress, city, state, cleaningExperience, typeExperience, company, companyAddress, companyPhone, canContactCompany, startDateCompany, endDateCompany, referenceContact, descriptionCompany, availabilityMonStart, availabilityMonEnd, availabilityTueStart, availabilityTueEnd, availabilityWedStart, availabilityWedEnd, availabilityThuStart, availabilityThuEnd, availabilityFriStart, availabilityFriEnd, availabilitySatStart, availabilitySatEnd, availabilitySunStart, availabilitySunEnd, drive, car, english, difficultyCleaning, meetUs, whyUs, termsPolicy)
    .then(() => {
        res.send("Application sent successfully!");
    })
    .catch((error) => {
        console.error('Error sending application: ', error);
        res.status(500).send("Error sending application");
    })
})

exports.sendEmailContact = functions.https.onRequest(app);
exports.sendEmailEstimate = functions.https.onRequest(app);
exports.sendEmailJobs = functions.https.onRequest(app);