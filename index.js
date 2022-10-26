const movieElem = document.querySelector(".movie")

async function main(movie) {
    const movies = await fetch(`http://www.omdbapi.com/?apikey=a63f6c5e&s=${movie}`)
    const moviesData = await movies.json()
    console.log(moviesData)

    movieElem.innerHTML = moviesData.map(
        (movie) =>
        `<div class="movie">
        <figure class="movie__poster">
        <img class="poster" src="./assets/poster.jpg" alt="">
        </figure>
        <div class="movie__description">
        <h3 class="movie__title"></h3>
        <h4 class="year"></h4>
        <a href="" class="imdb"></a>
        </div>
        </div>`
    ).join("")
}

main()