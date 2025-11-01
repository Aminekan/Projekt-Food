document.getElementById('reserveBtn').addEventListener('click', reservieren);

function reservieren(){
    const name = document.getElementById('name').value;
    const personen = document.getElementById('persons').value;
    const Date = document.getElementById('date').value;
    const Time = document.getElementById('time').value;
    const msg = document.getElementById('message');
  
    if (name && Date && Time) {
      msg.textContent = `Danke, ${name}! Dein Tisch für ${personen} Person(en) am ${Date} um ${Time} wurde reserviert.`;
      msg.style.color = "green";
    } else {
      msg.textContent = "Bitte fülle alle Felder aus!";
      msg.style.color = "red";
    }
  }