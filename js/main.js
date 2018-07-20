---
---
window.addEventListener('scroll', () => {
  let scrolled = window.pageYOffset || document.body.scrollTop,
      overlayOpacity;
  const overlay = document.querySelector('.overlay'),
        fadeUntil = overlay.offsetHeight;
  
  if(scrolled <= fadeUntil) {
    overlayOpacity = (scrolled/fadeUntil) * 1;
  }
  
  overlay.style.opacity = overlayOpacity;
});

console.log('this works');