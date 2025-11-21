// Автоматический скролл с JavaScript 
const scrollContainer = document.getElementById('scrollContainer'); 
let scrollPosition = 0; 
const scrollSpeed = 1; // пикселей за кадр 
let animationId; 
 
function autoScroll() { 
 scrollPosition += scrollSpeed; 
 
 // Если дошли до конца - возвращаемся в начало 
 const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth; 
 if (scrollPosition >= maxScroll) { 
 scrollPosition = 0; 
 } 
 
 scrollContainer.scrollLeft = scrollPosition; 
 animationId = requestAnimationFrame(autoScroll); 
} 
 
// Запускаем автоскролл 
autoScroll(); 
 
// Пауза при наведении 
scrollContainer.addEventListener('mouseenter', () => { 
 cancelAnimationFrame(animationId); 
}); 
 
// Продолжаем когда мышь убрали 
scrollContainer.addEventListener('mouseleave', () => { 
 autoScroll(); 
});