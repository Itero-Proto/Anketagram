const tg = window.Telegram.WebApp;
tg.expand(); // Раскрываем на весь экран

document.getElementById("anketaForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    season: document.getElementById("season").value,
    color: document.getElementById("color").value,
    aroma: document.getElementById("aroma").value,
    movie: document.getElementById("movie").value,
    music: document.getElementById("music").value,
    dish: document.getElementById("dish").value,
  };

  // Отправляем данные боту
  tg.sendData(JSON.stringify(formData));
  tg.close();
});
