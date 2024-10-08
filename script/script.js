document.addEventListener("DOMContentLoaded", function () {
    // Mengatur animasi dengan GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Animasi untuk section-2: dari bawah ke atas
    gsap.fromTo("#section2 .content-left", 
        { x: -100, opacity: 0 },  // Mulai dari di luar layar di bagian bawah
        { 
            x: 0, opacity: 1,  // Masuk ke posisi semula
            duration: 1, 
            scrollTrigger: {
                trigger: "#section2",
                start: "top bottom",
                toggleActions: "play none none none"
            }
        }
    );

    // Animasi untuk section-3: dari atas ke bawah
    gsap.fromTo("#section3 .logo-container", 
        { y: -100, opacity: 0 },  // Mulai dari di luar layar di bagian atas
        { 
            y: 0, opacity: 1,  // Masuk ke posisi semula
            duration: 1, 
            scrollTrigger: {
                trigger: "#section3",
                start: "top bottom", // Mulai animasi ketika bagian atas section mencapai tengah viewport
                toggleActions: "play none none none"
            }
        }
    );

    // Animasi untuk section-4: dari kiri ke kanan
    gsap.fromTo("#section4 .card-container", 
        { x: -100, opacity: 0 },  // Mulai dari di luar layar di sebelah kiri
        { 
            x: 0, opacity: 1,  // Masuk ke posisi semula
            duration: 1, 
            scrollTrigger: {
                trigger: "#section4",
                start: "top bottom",
                toggleActions: "play none none none"
            }
        }
    );

    // Animasi untuk section-5: dari bawah ke atas
    gsap.fromTo("#section5 .content", 
        { y: 100, opacity: 0 },  // Mulai dari di luar layar di bagian bawah
        { 
            y: 0, opacity: 1,  // Masuk ke posisi semula
            duration: 1, 
            scrollTrigger: {
                trigger: "#section5",
                start: "top bottom",
                toggleActions: "play none none none"
            }
        }
    );
});
