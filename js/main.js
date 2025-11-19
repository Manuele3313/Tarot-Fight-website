document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const header = document.querySelector('#home'); 

            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'start'
                });

            }
        });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('.content-section');
    const desktopLinks = document.querySelectorAll('.nav-links a');
    const mobileLinks = document.querySelectorAll('.mobile-bottom-nav .nav-item');

    function updateActiveNav() {
        let current = '';
        const scrollPos = window.scrollY + 200;

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
document.getElementById('text-button').addEventListener('click', function(){
    this.classList.toggle('pressed');
    toggleText();
})

function toggleText(){
    const t1 = document.getElementById('text-1');
    const t2 = document.getElementById('text-2');
    if (t1.style.display === 'none') {
    t1.style.display = 'block';
    t2.style.display = 'none';
  } else {
    t1.style.display = 'none';
    t2.style.display = 'block';
  }
}