// Menu Mobile
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    animateLinks(opening) {
        this.navLinks.forEach((link, index) => {
            link.style.animation = "none"; // reseta
            if (opening) {
                link.offsetHeight; // força reflow
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    }

    handleClick() {
        const isActive = this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.mobileMenu.setAttribute("aria-expanded", isActive);
        this.animateLinks(isActive);

        if (isActive && this.navLinks.length > 0) {
            this.navLinks[0].focus();
        }
    }

    handleKeyDown(event) {
        if (event.key === "Escape" && this.navList.classList.contains(this.activeClass)) {
            this.closeMenu();
        }
    }

    closeMenu() {
        this.navList.classList.remove(this.activeClass);
        this.mobileMenu.classList.remove(this.activeClass);
        this.mobileMenu.setAttribute("aria-expanded", "false");
        this.animateLinks(false);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    addLinkEvents() {
        this.navLinks.forEach((link) =>
            link.addEventListener("click", () => this.closeMenu())
        );
    }

    addKeyboardEvents() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
            this.addLinkEvents();
            this.addKeyboardEvents();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li a"
);
mobileNavbar.init();

// Hard Skills animation
const skills = document.querySelectorAll('.skill-bar div');

function fillSkills() {
    skills.forEach(skill => {
        const width = skill.getAttribute('data-skill');
        skill.style.width = width;
    });
}

// Dispara animação quando a seção de hard skills entra na tela
const skillsSection = document.querySelector('.hard-skills');
if (skillsSection) {
    window.addEventListener('scroll', () => {
        const sectionPos = skillsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.2;
        if (sectionPos < screenPos) {
            fillSkills();
        }
    });
}






