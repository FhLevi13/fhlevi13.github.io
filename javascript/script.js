// Inisialisasi GSAP dan ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animasi masuk untuk setiap section
gsap.utils.toArray(".tech-section").forEach(section => {
    gsap.fromTo(section.querySelector(".content"), 
    {
        opacity: 0, 
        y: 50
    }, 
    {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: true,
            toggleActions: "play none none reverse",
        }
    });
});
