// Navbar background change on scroll 
/*window.addEventListener( 'scroll',function () {
    const navbar = document.querySelector('navbar');
    if(window.scrollY > 50){
        navbar.classList.add('scrolled');
    }
    else{
        navbar.classList.remove('scrolled');
    }

//back to button visibility
const backToTop = document.querySelector('back-to-top-btn');
if(window.scrollY > 300){
    backToTop.classList.add('active');
}else{
    backToTop.classList.remove('active');
}
});

// smooth scrolling for navigation links
document.querySelectorAll('a.nav-link, .back-to-top-btn').forEach(anchor =>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if(targetElement){
              window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
              })
        }
    }) 
})
// Initialize Aos
AOS.init({
    duration:1000,
    once:true,
    easing: 'ease-in-out'

});*/
window.addEventListener('scroll', function () {

    const navbar = document.querySelector('.navbar');

    if(window.scrollY > 50){
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // back to top button visibility
    const backToTop = document.querySelector('.back-to-top');

    if(window.scrollY > 300){
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }

});


// smooth scrolling
document.querySelectorAll('a.nav-link, .back-to-top').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const targetId = this.getAttribute('href');

        if(targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if(targetElement){
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }

    });

});


// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out'
});