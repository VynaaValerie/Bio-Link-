document.addEventListener("DOMContentLoaded", function() {
    const bioLinks = document.querySelectorAll(".bio-link");
    bioLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = this.getAttribute("href");
        });
    });
});
