document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'start'
                });

            }
        });
    });

    // Select theme based on user preference
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        changeBtnIcon();
    } else{
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        changeBtnIcon();
    }

    // Active navigation highlighting
    const sections = document.querySelectorAll('.content-section');
    const desktopLinks = document.querySelectorAll('.nav-links a');
    const mobileLinks = document.querySelectorAll('.mobile-bottom-nav .nav-item');

    function updateActiveNav() {
        let current = '';
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        // Update desktop navigation
        desktopLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Update mobile navigation
        mobileLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Initial call and scroll event
    updateActiveNav();
    window.addEventListener('scroll', updateActiveNav);

    // Mobile nav touch feedback
    mobileLinks.forEach(link => {
        link.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        link.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
});

// Functionality for the text-toggle button
// TO BE RE-ADDED IN THE FUTURE
// document.getElementById('text-button').addEventListener('click', function(){
//     toggleText();
// })


// function toggleText(){
//     const t1 = document.getElementById('text-1');
//     const t2 = document.getElementById('text-2');
//     if (t1.style.display === 'none') {
//     t1.style.display = 'block';
//     t2.style.display = 'none';
//   } else {
//     t1.style.display = 'none';
//     t2.style.display = 'block';
//   }
// }


// Functionality for the theme-togglebutton
document.getElementById('theme-button').addEventListener('click', function(){
    toggleTheme();
    changeBtnIcon();
})


function toggleTheme(){
    const body = document.querySelector('body');
    if(body.classList.contains('light-mode')){
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');
    } else{
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
    }
}
//Toggles the right theme icon 
function changeBtnIcon(){
    const lightIcon = document.getElementById("theme-button-icon-light");
    const darkIcon = document.getElementById("theme-button-icon-dark");
    const body = document.querySelector('body');
    if(body.classList.contains('light-mode')){
        lightIcon.style.display = 'block';
        darkIcon.style.display = 'none';
    } else if(body.classList.contains('dark-mode')){
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'block';
    }
}