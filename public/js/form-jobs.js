const form = document.getElementById('formSubmitJobs');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //obter os valores dos campos do formulário
    const name = document.getElementById("name-jobs").value;
    const lastName = document.getElementById("last-name-jobs").value;
    const birth = document.getElementById("birth-jobs"). value;
    const nationality = document.getElementById("nationality-jobs").value;
    const email = document.getElementById("email-jobs").value;
    const phone = document.getElementById("phone-jobs").value;
    const ssnItinW7 = document.getElementById("ssn-jobs").value;
    const maritalStatus = document.getElementById("marital-jobs").value;
    const zipCode = document.getElementById("zipCode-jobs").value;
    const address = document.getElementById("address-jobs").value;
    const numberAddress = document.getElementById("number-address-jobs").value;
    const aptAddress = document.getElementById("apt-address-jobs").value;
    const city = document.getElementById("city-jobs").value;
    const state = document.getElementById("state-jobs").value;
    const cleaningExperience = document.querySelector('input[name="House cleaning experience"]:checked').value;
    const typeExperience = document.querySelector('input[name="Company or independent"]:checked').value;
    const company = document.getElementById("company-jobs").value;
    const companyAddress = document.getElementById("company-address-jobs").value;
    const companyPhone = document.getElementById("company-phone").value;
    const canContactCompany = document.querySelector('input[name="Reference company"]:checked').value;
    const startDateCompany = document.getElementById("start-company").value;
    const endDateCompany = document.getElementById("end-company").value;
    const referenceContact = document.getElementById("reference-contact").value;
    const descriptionCompany = document.getElementById("description-company").value;
    
    const availabilityMonStart = document.getElementById("mon-start").value;
    const availabilityMonEnd = document.getElementById("mon-end").value;
    const availabilityTueStart = document.getElementById("tue-start").value;
    const availabilityTueEnd = document.getElementById("tue-end").value;
    const availabilityWedStart = document.getElementById("wed-start").value;
    const availabilityWedEnd = document.getElementById("wed-end").value;
    const availabilityThuStart = document.getElementById("thu-start").value;
    const availabilityThuEnd = document.getElementById("thu-end").value;
    const availabilityFriStart = document.getElementById("fri-start").value;
    const availabilityFriEnd = document.getElementById("fri-end").value;
    const availabilitySatStart = document.getElementById("sat-start").value;
    const availabilitySatEnd = document.getElementById("sat-end").value;
    const availabilitySunStart = document.getElementById("sun-start").value;
    const availabilitySunEnd = document.getElementById("sun-end").value;
    const drive = document.querySelector('input[name="Do you drive"]:checked').value;
    const car = document.querySelector('input[name="Do you have your own car"]:checked').value;
    const english = document.querySelector('input[name="Do you speak english"]:checked').value;
    const difficultyCleaning = document.querySelector('input[name="Difficulty cleaning"]:checked').value;
    const meetUs = document.getElementById("meet-us-jobs").value;
    const whyUs = document.getElementById("description-why-us").value;
    const termsPolicy = document.querySelector('input[name="Accept Term of Use and Privacy Policy"]:checked').value;
        

    //dados do formulário
    const formData = {
        name,
        lastName,
        birth,
        nationality,
        email,
        phone,
        ssnItinW7,
        maritalStatus,
        zipCode,
        address,
        numberAddress,
        aptAddress,
        city,
        state,
        cleaningExperience,
        typeExperience,
        company,
        companyAddress,
        companyPhone,
        canContactCompany,
        startDateCompany,
        endDateCompany,
        referenceContact,
        descriptionCompany,
        availabilityMonStart,
        availabilityMonEnd,
        availabilityTueStart,
        availabilityTueEnd,
        availabilityWedStart,
        availabilityWedEnd,
        availabilityThuStart,
        availabilityThuEnd,
        availabilityFriStart,
        availabilityFriEnd,
        availabilitySatStart,
        availabilitySatEnd,
        availabilitySunStart,
        availabilitySunEnd,
        drive,
        car,
        english,
        difficultyCleaning,
        meetUs,
        whyUs,
        termsPolicy
    };
    console.log(formData);

    //envia dados do form para o servidor
    axios.post('https://us-central1-somemaidtest.cloudfunctions.net/sendEmailJobs/send-email-jobs', formData)
    .then(response => {
        console.log('E-mail sent: ', response.data);
        //limpa o form
        form.reset();
    })
    .catch(error => {
        console.error('Error sending the e-mail: ', error);
    });
});