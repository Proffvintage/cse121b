
const apiKey = "e5f9bc93f41aafa967d208157e15352a";
const moviesElement = document.querySelector("#movies");
let movieList = [];

async function displayMovies(movieList) {
  moviesElement.innerHTML = ""; // Reset the movies element
  movieList.forEach((element) => {
    let moviePoster = document.createElement("img");
    moviePoster.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w200${element.poster_path}`
    );
    moviePoster.setAttribute("alt", element.title);
    let movieTitle = document.createElement("h3");
    movieTitle.textContent = element.title;
    let imdbLink = document.createElement("a");
    imdbLink.setAttribute("href", `https://www.themoviedb.org/title/${element.imdb_id}/`);
    imdbLink.textContent = "";
    let article = document.createElement("article");
    article.append(moviePoster, movieTitle, imdbLink);
    moviesElement.appendChild(article);
  });
}

const getMovies = async (sortBy) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${sortBy}?api_key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    movieList = data.results; // Set the global movieList to the fetched data
    displayMovies(movieList); // Call displayMovies function
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

document.querySelector("#sortBy").addEventListener("change", () => {
  const sortBy = document.querySelector("#sortBy").value;
  getMovies(sortBy);
});

document.querySelector("#fetchMovies").addEventListener("click", () => {
  const sortBy = document.querySelector("#sortBy").value;
  getMovies(sortBy);
});

// Call the getMovies function with the default sortBy value
getMovies("popular");

// Add options for top_rated, now_playing, and popular
document.querySelector("#sortBy").innerHTML = `
  <option value="popular">Popular</option>
  <option value="top_rated">Top Rated</option>
  <option value="now_playing">Now Playing</option>
`;