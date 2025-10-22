document.addEventListener("DOMContentLoaded", () => {
  console.log("Site yüklendi!");
  
  // Scroll animasyonları
  const fadeElements = document.querySelectorAll('section, h2, p, .feature-card, .tech-item');
  
  const fadeInOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  fadeElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInOnScroll.observe(el);
  });
  
  // Navbar linklerine tıklama efekti
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      // Aktif sınıfını güncelle
      document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Sayfa yüklendiğinde aktif linki ayarla
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
  
  // Özellik kartlarına hover efekti
  document.querySelectorAll('.feature-card, .tech-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-12px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Teknoloji ikonlarına hover efekti
  document.querySelectorAll('.tech-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.2) rotate(10deg)';
    });
    
    icon.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) rotate(0deg)';
    });
  });
});
