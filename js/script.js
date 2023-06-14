import { movies } from "./db.js";

let ul = document.querySelector(".promo__interactive-list")
let promo_bg = document.querySelector(".promo__bg")
let promo_genre = document.querySelector(".promo__genre")
let promo__title = document.querySelector(".promo__title")
let promo__descr = document.querySelector(".promo__descr")
let imdb = document.querySelector(".imdb")
let metascore = document.querySelector(".metascore")


reload(movies.sort((a, b) => a.Title > b.Title ? 1 : -1))
function reload(data) {
    
    ul.innerHTML = ""

        for (const item of data) {
            let li = document.createElement("li")
            let li_del = document.createElement("div")

            li.classList.add("promo__interactive-item")
            li_del.classList.add("delete")

            li.innerHTML = item.Title

            ul.append(li)
            li.append(li_del)

            li.onclick = () => {
                promo_bg.style.backgroundImage = `url( ${item.Poster} )`;
                promo__descr.textContent = item.Plot
                promo__title.textContent = item.Title
                promo_genre.textContent = item.Genre
                imdb.textContent = item.imdbRating
                metascore.textContent = item.Metascore
                
            }

        }
    }

