/* Open when someone clicks on the span element */
function openNav() {
    document.querySelector('.nav-mb').classList.add('nav-mb-active');
    document.querySelector('.nav-mb').classList.remove('nav-mb-hiden');
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.querySelector('.nav-mb').classList.add('nav-mb-hiden');
    document.querySelector('.nav-mb').classList.remove('nav-mb-active');
}
