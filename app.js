// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;

// Расширяем на весь экран
tg.expand();

// Обработка отправки формы
document.getElementById("anketaForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const language = document.getElementById("language").value;

    // Отправляем данные в Telegram (можно обработать в боте)
    tg.sendData(JSON.stringify({
        name,
        age,
        language
    }));

    // Закрываем WebApp
    tg.close();
});