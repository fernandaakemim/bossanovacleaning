const form = document.getElementById('formSubmitEstimate');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //obter os valores dos campos do formulário
    const name = document.getElementById("name-client").value;
    const email = document.getElementById("email-client").value;
    const phone = document.getElementById("phone-client").value;
    const zipcode = document.getElementById("zipCode").value;
    const address = document.getElementById("address-client").value;
    const numberAddress = document.getElementById("number-address-client").value;
    const aptAddress = document.getElementById("apt-address-client").value;
    const suite = document.getElementById("suite-address-client").value;
    const city = document.getElementById("city-client").value;
    const state = document.getElementById("state-client").value;
    const property = document.getElementById("property").value;
    const service = document.getElementById("service").value;
    const propertySize = document.getElementById("property-size").value;
    const beds = document.getElementById("number-beds").value;
    const baths = document.getElementById("number-baths").value;
    const people = document.getElementById("number-people").value;
    const pets = document.getElementById("number-pets").value;
    const frequency = document.getElementById("frequency").value;


    //dados do formulário
    const formData = {
        name,
        email,
        phone,
        zipcode,
        address,
        numberAddress,
        aptAddress,
        suite,
        city,
        state,
        property,
        service,
        propertySize,
        beds,
        baths,
        people,
        pets,
        frequency
    };
    console.log(formData);

    //envia dados do form para o servidor
    axios.post('https://us-central1-somemaidtest.cloudfunctions.net/sendEmailEstimate/send-email-estimate', formData)
    .then(response => {
        console.log('E-mail sent: ', response.data);
        //limpa o form
        form.reset();
    })
    .catch(error => {
        console.error('Error sending the e-mail: ', error);
    });
});