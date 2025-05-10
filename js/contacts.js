const btn = document.getElementById('btnSend');

document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_v5uwdp3';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send';
      alert('Sent!');
      resetField();
    }, (err) => {
      btn.value = 'Send';
      alert(JSON.stringify(err));
    });
});

function resetField(){
    document.getElementById("txtName").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAfair").value = "";
    document.getElementById("txtmessage").value = "";
}