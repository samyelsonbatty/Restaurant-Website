const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

document.querySelectorAll('.nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

document.querySelectorAll(".add-btn").forEach(button => {
    button.addEventListener("click", () => {
        button.textContent = "Added!";
        button.style.backgroundColor = "green";
        setTimeout(() => {
            button.textContent = "Add To Cart";
            button.style.backgroundColor = "orange";
        }, 1500);
    });
});
