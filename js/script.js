"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const adv = document.querySelectorAll(".promo__adv img"),
        promoBg = document.querySelector(".promo__bg"),
        genre = promoBg.querySelector(".promo__genre"),
        movieList = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector("form.add"),
        addingInput = addForm.querySelector(".adding__input"),
        checkbox = addForm.querySelector('[type="checkbox"]');


    const movieDB = {
        movies: [
            "Джентльмены",
            "Бинго-Бонго",
            "Двенадцать обезьян",
            "Крепкий орешек",
            "Карты, деньги, два ствола",
        ],
    };

    const renderWatchedFilms = function (films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
         <li class = "promo__interactive-item"> ${i + 1}. ${film}
          <div class = "delete"> </div> </li>
        `;
        });



        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {

                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                renderWatchedFilms(films, parent);

            });
        });
    };

    const delAdv = (arr) => {
        arr.forEach((item) => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = "ДРАМА";
        promoBg.style.backgroundImage = `url('img/bg.jpg')`;
    };

    const sortArr = (arr) => {
        arr.sort();
    };


    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let answer = addingInput.value;
        const favorite = checkbox.checked;

        if (answer) {
            if (answer.length >= 21) {
                answer = answer.substr(0, 19) + '...';
            }
            if (favorite) {
                console.log("Добавляем любимый фильм");
            }
            movieDB.movies.push(answer);
            renderWatchedFilms(movieDB.movies, movieList);
            event.target.reset();
        }

    });



    makeChanges();
    delAdv(adv);
    renderWatchedFilms(movieDB.movies, movieList);
});