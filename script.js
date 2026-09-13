// RagNest Studio - Website Interactions

document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for navigation links
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

    // Simple button interaction
    const projectButtons = document.querySelectorAll(
        'a[href="#contact"]'
    );

    projectButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            console.log("Let's work together!");
        });
    });

});