document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - (document.querySelector('header').offsetHeight), // Adjust for sticky header
                        behavior: 'smooth'
                    });
                }
            }

            // Close mobile nav if open
            if (window.innerWidth <= 768) {
                const nav = document.querySelector('nav');
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            }
        });
    });

    // Hero Slider Functionality
    const heroSliderImages = document.querySelectorAll('.hero-slider img');
    let currentSlide = 0;

    function showSlide(index) {
        heroSliderImages.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % heroSliderImages.length;
        showSlide(currentSlide);
    }

    // Initialize slider and set interval
    if (heroSliderImages.length > 0) {
        showSlide(currentSlide);
        setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Close nav when clicking outside (optional, but good UX)
    document.addEventListener('click', (event) => {
        if (!nav.contains(event.target) && !navToggle.contains(event.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });

    // Form Submission (Frontend only - requires backend for actual submission)
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real application, you'd send this data to a server here using fetch() or XMLHttpRequest
            alert('Pendaftaran Anda telah kami terima! Panitia PSB akan segera menghubungi Anda. Terima kasih.');
            this.reset(); // Clear the form after "submission"
        });
    }
});

/*


yanbuul_huda_website/
├── index.html
├── style.css
├── script.js
└── images/
    ├── logo_yanbuulhuda.png           (Logo Pondok Pesantren Anda)
    ├── hero_slider1.jpg               (Gambar untuk slider di hero section)
    ├── hero_slider2.jpg
    ├── hero_slider3.jpg
    ├── galeri_belajar1.jpg            (Foto kegiatan pembelajaran)
    ├── galeri_belajar2.jpg
    ├── galeri_gedung1.jpg             (Foto gedung pondok)
    ├── galeri_masjid.jpg
    ├── galeri_mengaji.jpg
    ├── galeri_asrama.jpg              (Foto asrama santri)
    ├── galeri_kegiatan.jpg            (Foto kegiatan santri lainnya)
    └── galeri_lapangan.jpg            (Foto fasilitas lain)


*/
