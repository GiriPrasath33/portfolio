let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

document.addEventListener("click", (event) => {
  const isClickInsideMenu =
    navbar.contains(event.target) || menuIcon.contains(event.target);

  if (navbar.classList.contains("active") && !isClickInsideMenu) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
});

// Scroll behavior
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
   
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    }
  });
}

//scroll reveal

ScrollReveal({
   reset: true ,
   distance:'80px',
   duration:2000,
   delay:200

});

ScrollReveal().reveal('.homecontent, .heading',{ origin:'top' });
ScrollReveal().reveal('.homeimg,.skills-container,.certificates-container,.sbc,.contact',{ origin:'bottom' });
ScrollReveal().reveal('.homecontent h1,.aboutimg',{ origin:'left' });
ScrollReveal().reveal('.homecontent p, .aboutcontent',{ origin:'right' });

//typed js

const typed = new Typed ('.multitext',{
  strings: ['Aspiring Pentester','Cybersecurity Enthusiast','CS Student'],
  typeSpeed : 100,
  backSpeed:100,
  backDelay:1000,
  loop:true
})
