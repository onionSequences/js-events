/* WHAT SHOULD YOU DO ?

- Create a page which should contain search field in the top

- Once page is loaded it should have list of at least 12 movies

- Each movie should have image and a name (should be contained in array of objects)

- Once you type something in the search field, it should filter movies by name, and display only movies that match

BONUS:

Add remove icon to each movie. When icon is clicked, movie should be removed from the list */

var data = [
  {
    movieName: "All the President's Men",
    imageUrl: "./img/1.jpg",
  },
  {
    movieName: "Young Frankenstein",
    imageUrl: "./img/2.jpg",
  },
  {
    movieName: "Almost Famous",
    imageUrl: "./img/3.jpg",
  },
  {
    movieName: "Vertigo",
    imageUrl: "./img/4.jpg",
  },
  {
    movieName: "Gladiator",
    imageUrl: "./img/5.jpg",
  },
  {
    movieName: "Monty Python and The Holy Grail",
    imageUrl: "./img/6.jpg",
  },
  {
    movieName: "Avatar",
    imageUrl: "./img/7.jpg",
  },
  {
    movieName: "The Lion King",
    imageUrl: "./img/8.jpg",
  },
  {
    movieName: "Raging Bull",
    imageUrl: "./img/9.jpg",
  },
  {
    movieName: "Mary Poppins",
    imageUrl: "./img/10.jpg",
  },
  {
    movieName: "Groundhog Day",
    imageUrl: "./img/11.jpg",
  },
  {
    movieName: "North by Northwest",
    imageUrl: "./img/12.jpg",
  },
  {
    movieName: "West Side Story",
    imageUrl: "./img/13.jpg",
  },
  {
    movieName: "Amelie",
    imageUrl: "./img/14.jpg",
  },
  {
    movieName: "Thelma and Louise",
    imageUrl: "./img/15.jpg",
  },
  {
    movieName: "Fight Club",
    imageUrl: "./img/16.jpg",
  },
  {
    movieName: "Rocky",
    imageUrl: "./img/17.jpg",
  },
  {
    movieName: "Memento",
    imageUrl: "./img/18.jpg",
  },
];
var input = document.querySelector(".search input");
var div = document.querySelector(".movies");
var searchBtn = document.querySelector("button.search-btn");

// Lets add movies to page
function moviesOnLoad(movies) {
  div.innerHTML = "";
  movies.forEach(function (movie) {
    div.append(structureForMovie(movie));
  });
}

// We create structure for each movie
function structureForMovie(movie) {
  var image = createEl("img", movie.movieName, movie.imageUrl);
  var name = createEl("p", movie.movieName);
  var article = document.createElement("article");
  var deleteMovieBtn = createEl(
    "button",
    '<i class="fa fa-times" aria-hidden="true"></i>'
  );

  deleteMovie(deleteMovieBtn, movie, article);
  article.prepend(deleteMovieBtn, image, name);

  return article;
}

function createEl(type, text, url) {
  var element = document.createElement(type);

  if (type === "img") {
    element.setAttribute("alt", text);
    element.setAttribute("src", url);
  }
  if (type === "button") element.innerHTML = text;
  if (type === "p") element.textContent = text;

  return element;
}

function deleteMovie(element, movie, article) {
  element.addEventListener("click", function () {
    data.splice(data.indexOf(movie), 1);
    article.remove();
    // Error's handle
    if (!data.length) {
      div.innerHTML =
        '<p>Movies list is empty. <br><a href="' +
        window.location.pathname +
        '">Refresh page</a></p>';
      input.setAttribute("disabled", true);
      searchBtn.setAttribute("disabled", true);
    }
    if (!div.innerHTML)
      div.innerHTML = "<p>No more results for this search.</p>";
  });
}

function searchMovies(movies) {
  var errorMsg = createEl("p", "Please enter movie name");

  // SEARCH WITH BUTTON //
  searchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    input.value ? filterMovies(movies) : input.parentElement.append(errorMsg);
  });

  // SEARCH ON INPUT //
  input.addEventListener("input", function () {
    errorMsg.remove();
    !input.value ? moviesOnLoad(movies) : filterMovies(movies);
  });
}

function filterMovies(movies) {
  var filtered = movies.filter(function (movie) {
    return movie.movieName.toLowerCase().includes(input.value.toLowerCase());
  });
  filtered.length
    ? moviesOnLoad(filtered)
    : (div.innerHTML =
        "<p>You searched for " +
        input.value +
        ". But we didn't find any movie.</p>");
}

moviesOnLoad(data);
searchMovies(data);
