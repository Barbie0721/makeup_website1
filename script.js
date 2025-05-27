
// Smooth scroll with offset
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = targetId === 'tutorial' ? 1400 : 150; // Further increased offset for tutorial section
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

function toggleImage(element) {
  const img = element.querySelector('.portfolio-image');
  img.classList.toggle('hidden');
}
