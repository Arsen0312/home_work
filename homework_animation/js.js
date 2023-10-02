const start = document.getElementById('start');
const Element = document.querySelector('.element');

start.addEventListener('click', () => {
    Element.style.animation = 'none'; // Сброс предыдущей анимации
    void Element.offsetWidth; // Принудительный перерасчет стилей
    Element.style.animation = null; // Сброс предыдущей анимации
});