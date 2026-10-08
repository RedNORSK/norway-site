// Приветствие в консоли (проверка работы JS)
console.log("Сайт о Норвегии загружен успешно!");

// Плавная прокрутка для якорных ссылок (если я буду добавлять их)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Анимация появления элементов при скролле
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});


// Логика для аккордеона (раскрывающиеся списки)
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        // Переключаю активное состояние
        this.classList.toggle('active');
        
        // Нахожу блок с контентом сразу после кнопки
        const content = this.nextElementSibling;
        
        // Плавно открываю или закрываю
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        } 
    });
});