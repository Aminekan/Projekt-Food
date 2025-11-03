document.getElementById('Btn-n').addEventListener('click', kontakt);

function kontakt() {
    const name = document.getElementById('Name').value;
    const email = document.getElementById('Adress').value;
    const telephone = document.getElementById('Telephone').value;
    const nachricht = document.getElementById('Nachricht').value;
    const message = document.getElementById('mesage');

    if (name && email && nachricht) {
      message.textContent = `Danke, ${name}! Wir haben deine Nachricht erhalten und werden uns bald bei dir melden.`;
      message.classList.add("success");
    } else {
      message.textContent = "Bitte fülle alle Felder aus!";
      message.classList.remove("success");
    }
}