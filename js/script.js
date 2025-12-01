document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = e.target;
    const data = {
        email: form.email.value,
        message: form.message.value
    };

    fetch("https://formspree.io/f/xkgdjrvn", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
        alert("Message envoyé avec succès !");
        form.reset();
        } else {
        alert("Erreur lors de l'envoi du message.");
        }
    });
});