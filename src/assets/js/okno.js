document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.poloc'); 
    const overlay = document.querySelector('.overlay');
    const closeButton = document.querySelector('.overlay__close');

    menuButton.addEventListener('click', function() {
        overlay.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});