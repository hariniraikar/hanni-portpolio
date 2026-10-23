/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =====================================================
   CERTIFICATE VIEWER
===================================================== */

function openCertificate(file, title) {

    const modal =
        document.getElementById("certificateModal");

    const viewer =
        document.getElementById("certificateViewer");

    const certificateTitle =
        document.getElementById("certificateTitle");


    certificateTitle.textContent = title;

    viewer.src = file;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* Close certificate */

function closeCertificate() {

    const modal =
        document.getElementById("certificateModal");

    const viewer =
        document.getElementById("certificateViewer");


    modal.classList.remove("active");

    viewer.src = "";

    document.body.style.overflow = "auto";
}


/* Close by clicking outside */

document
    .getElementById("certificateModal")
    .addEventListener("click", function (event) {

        if (event.target === this) {

            closeCertificate();

        }

    });


/* Close with ESC */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeCertificate();

    }

});


/* =====================================================
   CONTACT FORM
===================================================== */

document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        alert(
            "Thank you for contacting me! " +
            "I will get back to you soon."
        );

        this.reset();

    });
    function viewCertificate(file) {
    window.open(file, "_blank");
}