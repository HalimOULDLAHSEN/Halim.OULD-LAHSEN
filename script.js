document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const userName = document.getElementById("user-name").value;
  const userEmail = document.getElementById("user-email").value;

  // ✅ 1. Envoi automatique au visiteur (ton template actuel)
  emailjs.send("service_b0bun1l", "template_5wek4qv", {
    email: userEmail
  }, "E2nceqWyEUuq_Yntx");
// ✅ 2. Notification envoyée à toi (il faut créer un template exprès dans EmailJS)
  emailjs.send("service_b0bun1l", "template_qbmrgpx", {
  name: userName,
  email: userEmail
}, "E2nceqWyEUuq_Yntx")
  .then(() => {
    document.getElementById("confirmation").style.display = "block";
    document.getElementById("contact-form").reset();
  }, (error) => {
    alert("Erreur lors de l’envoi : " + JSON.stringify(error));
  });
});


emailjs.send("service_b0bun1l", "template_notify_me", {
  name: userName,
  email: userEmail
}, "E2nceqWyEUuq_Yntx")
