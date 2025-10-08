/*Services*/
const images = document.querySelectorAll('.service-images img');

  images.forEach(img => {
    img.addEventListener('click', () => {
      img.classList.toggle('active');
    });
  });

/*Social Bar*/
document.querySelectorAll(".social-bar .icon").forEach((icon, index) => {
  setTimeout(() => {
    icon.style.transform = "scale(1.3)";
    setTimeout(() => {
      icon.style.transform = "scale(1)";
    }, 300);
  }, index * 200);
});
