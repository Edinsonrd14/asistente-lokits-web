document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("#menuToggle");
  const navMenu = document.querySelector("#navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");

      const isOpen = navMenu.classList.contains("active");

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
      );

      menuToggle.innerHTML = isOpen ? "✕" : "☰";
    });

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.innerHTML = "☰";
        menuToggle.setAttribute("aria-label", "Abrir menú");
      });
    });
  }

  const contactForm = document.querySelector("#contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const whatsappNumber = "18090000000";

      const name = document.querySelector("#contactName").value.trim();
      const clan = document.querySelector("#contactClan").value.trim();
      const plan = document.querySelector("#contactPlan").value.trim();
      const message = document.querySelector("#contactMessage").value.trim();

      const finalMessage = `
Hola, quiero información sobre Asistente LOKITS.

Nombre o alias: ${name}
Clan: ${clan}
Plan de interés: ${plan}

Mensaje:
${message || "Quiero conocer más detalles para activar el asistente en mi clan."}
      `.trim();

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`;

      window.open(whatsappUrl, "_blank");
    });
  }

  console.log("Asistente LOKITS Web cargada correctamente.");
});