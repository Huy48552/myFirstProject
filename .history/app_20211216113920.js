/* Open when someone clicks on the span element */
function openNav() {
    document.querySelector('.nav-mb').classList.add('nav-mb-active');
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById('myNav').style.width = '0%';
}
