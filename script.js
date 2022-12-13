const form = document.getElementById('form');

function handleSubmit(event) {
    event.preventDefault();
    console.log('teste');
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;

    const result = `${name}\n${email}\n${message}`;

    alert(result);
}

form.addEventListener('submit', handleSubmit)