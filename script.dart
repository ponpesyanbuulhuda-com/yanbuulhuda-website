document.addEventListener('DOMContentLoaded', function() {

    // ===================================================
    // 1. FUNGSI NAVIGASI TOGGLE (HAMBURGER MENU)
    // ===================================================

    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.getElementById('main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function() {
            // Toggle class 'active' pada navigasi utama
            mainNav.classList.toggle('active');

            // Toggle ARIA attributes untuk aksesibilitas
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
            navToggle.setAttribute('aria-expanded', !isExpanded);
        });

        // Menutup menu jika salah satu tautan di-klik (Berguna untuk navigasi di mobile)
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Pastikan menu tertutup setelah klik
                mainNav.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }


    // ===================================================
    // 2. FUNGSI HERO SLIDER OTOMATIS
    // ===================================================

    const sliderContainer = document.querySelector('.hero-slider');
    
    if (sliderContainer) {
        const slides = sliderContainer.querySelectorAll('img');
        let currentSlide = 0;
        const slideInterval = 5000; // Ganti setiap 5 detik

        function nextSlide() {
            // Hapus class 'active' dari slide saat ini
            slides[currentSlide].classList.remove('active');
            
            // Pindah ke slide berikutnya
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Tambahkan class 'active' ke slide yang baru
            slides[currentSlide].classList.add('active');
        }

        // Jalankan fungsi slide pertama kali
        if (slides.length > 1) {
             // Pastikan hanya satu slide yang aktif saat inisialisasi
             slides.forEach((slide, index) => {
                 slide.classList.remove('active');
                 if (index === 0) {
                     slide.classList.add('active');
                 }
             });
            setInterval(nextSlide, slideInterval);
        }
    }
    
   



    // ===================================================
    // 3. (OPSIONAL) FORM VALIDASI SISI KLIEN
    // ===================================================
    
    const registrationForm = document.getElementById('registrationForm');
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            
            const dokumenInput = document.getElementById('dokumen');
            let totalFileSize = 0;
            const maxTotalSize = 10 * 1024 * 1024; // 10MB dalam bytes
            
            // Cek jumlah file
            if (dokumenInput.files.length > 4) {
                alert('Maksimal 4 dokumen yang boleh diunggah.');
                event.preventDefault();
                return;
            }

            // Cek total ukuran file
            for (let i = 0; i < dokumenInput.files.length; i++) {
                totalFileSize += dokumenInput.files[i].size;
            }

            if (totalFileSize > maxTotalSize) {
                alert('Total ukuran file melebihi batas (Maksimal 10MB).');
                event.preventDefault();
                return;
            }
            
            // ===================================================
// 3. FUNGSI EKSTRAKURIKULER SLIDER OTOMATIS (BARU)
// ===================================================

document.querySelectorAll('.ekskul-slider').forEach(sliderContainer => {
    const slides = sliderContainer.querySelectorAll('img');
    
    if (slides.length > 1) {
        let currentSlide = 0;
        const slideInterval = 4000; // Interval sedikit lebih cepat (4 detik)

        function nextEkskulSlide() {
            // Hapus class 'active' dari slide saat ini
            slides[currentSlide].classList.remove('active');
            
            // Pindah ke slide berikutnya (melingkar)
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Tambahkan class 'active' ke slide yang baru
            slides[currentSlide].classList.add('active');
        }

        // Inisialisasi: Pastikan hanya slide pertama yang aktif
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === 0) {
                slide.classList.add('active');
            }
        });

        // Mulai slider otomatis
        setInterval(nextEkskulSlide, slideInterval);
    }
});

            // Jika semua validasi sukses, formulir akan dikirim.
            // Anda dapat menambahkan notifikasi sukses di sini jika Anda menggunakan AJAX.
        });
    }
});