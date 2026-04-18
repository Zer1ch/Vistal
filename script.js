 // Знаходимо бургер і меню за їхніми ID
        const burger = document.getElementById('burger');
        const menu = document.getElementById('menu-links');

        // Додаємо подію кліку
        burger.addEventListener('click', function() {
            // Перемикаємо клас 'active' (якщо його немає - додає, якщо є - забирає)
            menu.classList.toggle('active');
            burger.classList.toggle('active'); // ДОДАЙ ЦЕЙ РЯДОК: Тепер бургер теж знає, що він натиснутий
        });