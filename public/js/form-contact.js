const form = document.getElementById('formSubmitContact');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //obter os valores dos campos do formulário
    const name = document.getElementById("name-contact").value;
    const email = document.getElementById("email-contact").value;
    const subject = document.getElementById("subject-contact").value;
    const message = document.getElementById("message-contact").value;

    //dados do formulário
    const formData = {
        name,
        email,
        subject,
        message
    };

    //envia dados do form para o servidor
    axios.post('https://us-central1-somemaidtest.cloudfunctions.net/sendEmailContact/send-email-contact', formData)
    .then(response => {
        console.log('E-mail sent: ', response.data);
        //limpa o form
        form.reset();
    })
    .catch(error => {
        console.error('Error sending the e-mail: ', error);
    });
});