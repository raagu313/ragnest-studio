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
// =====================================
// RAGNEST STUDIO
// FULL WEBSITE ANIMATIONS
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    // -------------------------------
    // SMOOTH SCROLLING
    // -------------------------------

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

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


    // -------------------------------
    // SCROLL REVEAL
    // -------------------------------

    const animatedElements = document.querySelectorAll(
        ".section-label, .section h2, .section-intro, " +
        ".service-card, .about-content, .process-card, .cta-box"
    );

    animatedElements.forEach(function (element) {

        element.classList.add("scroll-hidden");

    });


    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("scroll-show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    animatedElements.forEach(function (element) {

        observer.observe(element);

    });


    // -------------------------------
    // SERVICE CARD STAGGER
    // -------------------------------

    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach(function (card, index) {

        card.style.transitionDelay = `${index * 0.12}s`;

    });


    // -------------------------------
    // PROCESS CARD STAGGER
    // -------------------------------

    const processCards = document.querySelectorAll(".process-card");

    processCards.forEach(function (card, index) {

        card.style.transitionDelay = `${index * 0.12}s`;

    });


    // -------------------------------
    // MOUSE MOVEMENT EFFECT
    // -------------------------------

    const hero = document.querySelector(".hero");

    if (hero) {

        hero.addEventListener("mousemove", function (event) {

            const x = (event.clientX / window.innerWidth - 0.5) * 20;
            const y = (event.clientY / window.innerHeight - 0.5) * 20;

            const orb = document.querySelector(".hero-orb");

            if (orb) {

                orb.style.transform =
                    `translate(${x}px, ${y}px)`;

            }

        });

    }


    // -------------------------------
    // BUTTON GLOW EFFECT
    // -------------------------------

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function (button) {

        button.addEventListener("mousemove", function () {

            button.style.boxShadow =
                "0 0 30px rgba(183,255,74,0.45)";

        });

        button.addEventListener("mouseleave", function () {

            button.style.boxShadow = "";

        });

    });


    // -------------------------------
    // CONSOLE MESSAGE
    // -------------------------------

    console.log(
        "RagNest Studio ✦ Creative ideas in motion."
    );

});
