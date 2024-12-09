const form = document.getElementById("contactForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const reason = document.getElementById("reason").value;
  const email = document.getElementById("email").value;

  alert(
    `Nombre: ${name}\nRazón de contacto: ${reason}\nCorreo electrónico: ${email}`
  );
});
