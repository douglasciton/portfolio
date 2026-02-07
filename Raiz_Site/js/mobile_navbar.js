class MobileNavbar {
    constructor(menuButton, navList) {
        this.menuButton = document.querySelector(menuButton);
        this.navList = document.querySelector(navList);
        this.activeClass = "active";

        this.toggleMenu = this.toggleMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    toggleMenu() {
        const isActive = this.navList.classList.toggle(this.activeClass);
        this.menuButton.classList.toggle(this.activeClass);
        this.menuButton.setAttribute("aria-expanded", isActive);

        if (isActive) {
            document.addEventListener("click", this.handleOutsideClick);
            document.addEventListener("keydown", this.handleKeyDown);
        } else {
            this.removeGlobalEvents();
        }
    }

    closeMenu() {
        this.navList.classList.remove(this.activeClass);
        this.menuButton.classList.remove(this.activeClass);
        this.menuButton.setAttribute("aria-expanded", "false");
        this.removeGlobalEvents();
    }

    handleOutsideClick(event) {
        if (
            !this.navList.contains(event.target) &&
            !this.menuButton.contains(event.target)
        ) {
            this.closeMenu();
        }
    }

    handleKeyDown(event) {
        if (event.key === "Escape") {
            this.closeMenu();
        }
    }

    removeGlobalEvents() {
        document.removeEventListener("click", this.handleOutsideClick);
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    init() {
        if (!this.menuButton || !this.navList) return;
        this.menuButton.addEventListener("click", this.toggleMenu);
    }
}

new MobileNavbar(".mobile-menu", ".nav-list").init();






