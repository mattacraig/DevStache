---
---

const addOpacity = () => {
	let scrolled 		= window.pageYOffset || document.body.scrollTop,
      overlayOpacity;
      
	const overlay 	= document.querySelector('.overlay');
	const fadeUntil = overlay.offsetHeight;
	
	if(scrolled <= fadeUntil) {
  	overlayOpacity = (scrolled/fadeUntil) * 1;
		}

  overlay.style.opacity = overlayOpacity;
};

const reduceNavHeight = () => {
	let scrolled = window.pageYOffset || document.body.scrollTop;

	const header 			 = document.querySelector('header'),
				nav 				 = document.querySelector('nav'),
				headerHeight = header.offsetHeight;

	if (scrolled >= headerHeight) {
		nav.classList.add('nav-scrolled');
	}else if (scrolled < headerHeight) {
		nav.classList.remove('nav-scrolled');
	}
};


window.addEventListener('scroll', addOpacity, false);
window.addEventListener('scroll', reduceNavHeight, false);

console.log('this works');
