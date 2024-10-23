function slider(qualquerCoisa) {
    document.querySelector('.one').src = qualquerCoisa;
};

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}