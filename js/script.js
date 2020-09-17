"use strict";

const adv = document.querySelectorAll(".promo__adv img"),
    promoBg = document.querySelector(".promo__bg"),
    genre = promoBg.querySelector(".promo__genre"),
    movieList = document.querySelector(".promo__interactive-list");

const movieDB = {
    movies: [
        "Джентльмены",
        "Бинго-Бонго",
        "Двенадцать обезьян",
        "Крепкий орешек",
        "Карты, деньги, два ствола",
    ],
};

genre.textContent = "ДРАМА";
promoBg.style.backgroundImage = `url('img/bg.jpg')`;
movieList.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
     <li class = "promo__interactive-item"> ${i + 1}. ${film}
      <div class = "delete"> </div> </li>
    `;
});

adv.forEach((item) => {
    item.remove();
});