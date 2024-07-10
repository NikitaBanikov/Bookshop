export function HeaderNavigation() {
    const headerLinks = document.querySelectorAll('.header-nav__item');
    headerLinks.forEach(link => {
        link.addEventListener('click', function() {
            headerLinks.forEach(l => {
                if (l !== this) {
                    l.classList.remove('active-link');
                }
            });
            this.classList.add('active-link');
        });
    });
}