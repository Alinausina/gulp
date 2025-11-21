// Простой менеджер темы
document.addEventListener('DOMContentLoaded', function() {
    console.log('Simple Theme Manager loaded');
    
    const switcher = document.querySelector('.theme-switcher');
    const icon = document.querySelector('.theme-icon');
    const themeKey = 'darkTheme';
    
    // Загружаем сохранённую тему
    const saved = localStorage.getItem(themeKey);
    if (saved === 'true') {
        document.body.classList.add('dark-theme');
        if (icon) icon.textContent = '☀️';
    }
    
    // Обработчик клика
    if (switcher) {
        switcher.addEventListener('click', function() {
            const isDark = document.body.classList.toggle('dark-theme');
            if (icon) icon.textContent = isDark ? '☀️' : '🌙';
            localStorage.setItem(themeKey, isDark);
            console.log('Theme changed to:', isDark ? 'dark' : 'light');
        });
    }
});