const tg = window.Telegram.WebApp;
tg.expand();

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
    game: document.getElementById("game").value,
    drink: document.getElementById("drink").value,
    place: document.getElementById("place").value,
    animal: document.getElementById("animal").value,
    superpower: document.getElementById("superpower").value,
    inspiration: document.getElementById("inspiration").value,
    bestDay: document.getElementById("bestDay").value,
    quote: document.getElementById("quote").value,
    dream: document.getElementById("dream").value,
    joy: document.getElementById("joy").value,
    fear: document.getElementById("fear").value,
    childhood: document.getElementById("childhood").value,
  };

  tg.sendData(JSON.stringify(formData));
  tg.close();
});
