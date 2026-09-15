// =====================================
// RAGNEST STUDIO
// INTERACTIVE EFFECTS
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // Scroll reveal animation
    const revealElements = document.querySelectorAll(
        ".service-card, .process-card, .about-content, .cta-box"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(35px)";
        element.style.transition = "opacity 0.8s ease, transform 0.8s ease";

        observer.observe(element);

    });


    // Button click message
    const projectButtons = document.querySelectorAll(
        'a[href="#about"]'
    );

    projectButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log("RagNest Studio — Let's create something amazing!");

        });

    });

});