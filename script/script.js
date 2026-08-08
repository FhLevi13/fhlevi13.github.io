document.addEventListener("DOMContentLoaded", function() {
            // Tangkap semua menu navbar dan semua halaman
            const navLinks = document.querySelectorAll(".nav-link");
            const pages = document.querySelectorAll(".page-section");

            navLinks.forEach(link => {
                link.addEventListener("click", function(e) {
                    e.preventDefault(); // Mencegah reload halaman

                    // 1. Hapus class 'active' dari semua menu navbar
                    navLinks.forEach(nav => nav.classList.remove("active"));
                    
                    // 2. Tambahkan class 'active' ke menu yang diklik
                    this.classList.add("active");

                    // 3. Ambil id target dari data-target
                    const targetId = this.getAttribute("data-target");

                    // 4. Sembunyikan semua halaman, lalu tampilkan halaman yang dipilih
                    pages.forEach(page => {
                        if (page.id === targetId) {
                            page.classList.add("active");
                        } else {
                            page.classList.remove("active");
                        }
                    });
                });
            });
        });