(function() {
    const gridLayer = document.getElementById('gridLayer');
    const mapDetails = document.getElementById('mapDetails');
      
    function updateBackgroundOnScroll() {
        const scrollY = window.scrollY || window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? scrollY / docHeight : 0;
        
        const offsetX = scrollPercent * 500;
        const offsetY = scrollPercent * 1;
        
        if (gridLayer) {
            gridLayer.style.transform = `rotateX(60deg) rotateZ(2deg) translate(${offsetX*1.6}px, ${offsetY}px) scale(1.6)`;
        }
        if (mapDetails) {
            mapDetails.style.transform = `rotateX(60deg) rotateZ(2deg) translate(${offsetX * 0.8}px, ${offsetY * 0.8}px) scale(1.6)`;
        }
    }


    window.addEventListener('scroll', updateBackgroundOnScroll);
    window.addEventListener('load', updateBackgroundOnScroll);

    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
      
    revealElements.forEach(el => observer.observe(el));
      
    window.addEventListener('load', () => {
        document.querySelectorAll('.reveal').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight-80) el.classList.add('visible');
        });
        updateBackgroundOnScroll();
    });
})();
