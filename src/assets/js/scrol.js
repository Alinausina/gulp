const scrollContainer = document.getElementById('scrollContainer'); 
let scrollPosition = 0; 
const scrollSpeed = 1; 
let animationId; 
 
function autoScroll() { 
 scrollPosition += scrollSpeed; 
 
 const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth; 
 if (scrollPosition >= maxScroll) { 
 scrollPosition = 0; 
 } 
 
 scrollContainer.scrollLeft = scrollPosition; 
 animationId = requestAnimationFrame(autoScroll); 
} 
 
autoScroll(); 
 
scrollContainer.addEventListener('mouseenter', () => { 
 cancelAnimationFrame(animationId); 
}); 
 
scrollContainer.addEventListener('mouseleave', () => { 
 autoScroll(); 
});