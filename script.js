document.addEventListener('DOMContentLoaded', () => {

// Aktifkan interaksi Maps hanya jika diklik
document.querySelector('.google-map').addEventListener('click', function() {
    this.querySelector('.map-container').style.pointerEvents = 'auto';
});

// Matikan kembali saat kursor keluar (opsional untuk desktop)
document.querySelector('.google-map').addEventListener('mouseleave', function() {
    this.querySelector('.map-container').style.pointerEvents = 'none';
});

    // Tambahkan ini agar menu tertutup saat link diklik
document.querySelectorAll('#main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});
    
    // --- 1. FUNGSI MENU MOBILE (HAMBURGER) ---
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('#main-nav');

    navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        // Ubah ikon bar jadi silang saat terbuka (opsional)
        const icon = navToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // --- 2. FUNGSI SLIDER (HERO & EKSKUL) ---
    function startSlider(sliderSelector) {
        const sliders = document.querySelectorAll(sliderSelector);
        
        sliders.forEach(slider => {
            const images = slider.querySelectorAll('img');
            let currentIndex = 0;

            if (images.length > 0) {
                // Pastikan gambar pertama aktif saat awal
                images[0].classList.add('active');

                // Berganti gambar setiap 3 detik
                setInterval(() => {
                    images[currentIndex].classList.remove('active');
                    currentIndex = (currentIndex + 1) % images.length;
                    images[currentIndex].classList.add('active');
                }, 3000);
            }
        });
    }

// --- FUNGSI FIX SCROLL MAPS ---
const mapContainer = document.querySelector('.map-container');
if (mapContainer) {
    mapContainer.addEventListener('click', function() {
        this.style.pointerEvents = 'auto'; // Aktifkan peta saat diklik
    });

    // Matikan kembali jika mouse/jari meninggalkan area peta
    mapContainer.addEventListener('mouseleave', function() {
        this.style.pointerEvents = 'none';
    });
}

    // Jalankan slider untuk Hero dan semua Ekskul
    startSlider('.hero-slider');
    startSlider('.ekskul-slider');
    startSlider('.program-slider');

// Ganti bagian "// --- 3. FUNGSI FORM WA ---" dengan ini:
const regForm = document.getElementById('registrationForm');
if (regForm) {
    regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Mengambil data lengkap sesuai form baru kamu
        const nama = document.getElementById('nama_lengkap').value;
        const tempatLahir = document.getElementById('tempat_lahir').value;
        const tglLahir = document.getElementById('tgl_lahir').value;
        const jenjang = document.getElementById('jenjang').value;
        const ayah = document.getElementById('nama_ayah').value;
        const wa = document.getElementById('no_hp_ortu').value;
        const alamat = document.getElementById('alamat').value;

        // Menyusun pesan yang sangat rapi untuk Panitia
        const pesan = `*PENDAFTARAN SANTRI BARU ONLINE*%0A` +
                      `----------------------------------%0A` +
                      `*Nama Lengkap:* ${nama}%0A` +
                      `*TTL:* ${tempatLahir}, ${tglLahir}%0A` +
                      `*Jenjang:* ${jenjang.toUpperCase()}%0A` +
                      `*Nama Ayah:* ${ayah}%0A` +
                      `*WhatsApp:* ${wa}%0A` +
                      `*Alamat:* ${alamat}%0A` +
                      `----------------------------------%0A` +
                      `Mohon instruksi selanjutnya untuk pengiriman dokumen.`;
        
        // Membuka WhatsApp
        window.open(`https://wa.me/628882821411?text=${pesan}`, '_blank');
    });
}

});