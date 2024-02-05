/*==================== toggle icon navbar===============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=> {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




/*================scroll section active link==========*/
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll('header nav a');

window.onscroll=()=>{
    section.forEach(sec => {
        let top=window.scrollY;
        let offset = sec.offsetTop- 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top>=offset && top<offset+height){
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
        }
    });
    // =========sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>100);

    /*============remove toggle icon navbar when navbar links clicks*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


};
/*======================typed js==================*/
const typed = new Typed('.multiple-text',{
    strings: ['Java Developer', 'Java Full Stack Developer','Software Developer','Electrical Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

