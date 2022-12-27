function changeimg(url) {
    document.getElementById('megamenu__first').style.background = url;
    var image = document.getElementById('megamenu__first');
    image.style.width = '100%';
    image.style.backgroundRepeat = 'no-repeat';
    image.style.backgroundSize = 'cover';
    image.style.backgroundPosition = 'center';
}
function closeimg() {
    document.getElementById('megamenu__first').style.background = 'none';
}
///////////////////////////////////////////////////////////
///*gérer les effets du menu*/

const headernav = document.querySelector('.header__navigation');
const headlist = headernav.querySelector('.header__list');
const returnback = headernav.querySelector('.header__retourarriere');
const menutrigger = document.querySelector('.header__menutrigger');
const headclose = headernav.querySelector('.header__close');

let submenu;
headlist.addEventListener('click', (e) => {
    if (!headernav.classList.contains('active')) {
        return;
    }
    if (e.target.closest('.header__link')) {
        const hasChildren = e.target.closest('.header__items');
        showSubMenu(hasChildren);
    }
});
returnback.addEventListener('click', () => {
    hideSubMenu();
});
menutrigger.addEventListener('click', () => {
    toggleMenu();
});
headclose.addEventListener('click', () => {
    toggleMenu();
});
document.querySelector('.header__overlay').addEventListener('click', () => {
    toggleMenu();
});
function toggleMenu() {
    headernav.classList.toggle('active');
    document.querySelector('.header__overlay').classList.toggle('active');
}
function showSubMenu(hasChildren) {
    submenu = hasChildren.querySelector('.submenu');
    submenu.classList.add('active');
    submenu.style.animation = 'slideleft 0.5s ease forwards';
    const menutitle = hasChildren.querySelector('.link__title').textContent;
    headernav.querySelector('.header__currentmenu').innerHTML = menutitle;
    headernav.querySelector('.header__menuhead').classList.add('active');
}
function hideSubMenu() {
    submenu.style.animation = 'slideRight 0.5s ease forwards';
    setTimeout(() => {
        submenu.classList.remove('active');
    }, 300);
    headernav.querySelector('.header__currentmenu').innerHTML = '';
    headernav.querySelector('.header__menuhead').classList.remove('active');
}
window.onresize = function () {
    if (this.innerWidth > 1050) {
        if (headernav.classList.contains('active')) {
            toggleMenu();
        }
    }
};
