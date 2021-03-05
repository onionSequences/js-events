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
var deleteInputBtn = document.querySelector('button[type="reset"]');
var searchBtn = document.querySelector("button.search-btn");

// Let's create movies
function moviesOnLoad(arr) {
  var movies = arr;

  movies.forEach(function (movie) {
    var createdMovie = structureForMovie(movie, movies);
    div.append(createdMovie);
  });
}

// Structure for each movie and delete button click event
function structureForMovie(movie, movies) {
  var image = document.createElement("img");
  var name = document.createElement("p");
  var article = document.createElement("article");
  var deleteMovieBtn = document.createElement("button");

  deleteMovieBtn.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
  deleteMovieBtn.addEventListener("click", function () {
    var index = movies.indexOf(movie);
    movies.splice(index, 1);
    article.remove();
  });

  article.append(deleteMovieBtn);

  image.setAttribute("alt", movie.movieName);
  image.setAttribute("src", movie.imageUrl);
  article.append(image);

  name.textContent = movie.movieName;
  article.append(name);
  return article;
}

// Live search movies when typing and with search button
function searchMovie(movies) {
  // With search button
  searchBtn.addEventListener("click", function (e) {
    var searchString = input.value.toLowerCase();
    e.preventDefault();
    div.innerHTML = "";
    filterMovies(movies, searchString);
  });
  // Live search on input event
  input.addEventListener("input", function () {
    var searchString = input.value.toLowerCase();

    // We want to display delete input button X too so we go with IF statment (Added feature beside homework)
    if (!searchString) {
      deleteInputBtn.style.display = "none";
      div.innerHTML = "";
      moviesOnLoad(movies);
    } else {
      deleteInputBtn.style.display = "inline-block";
      div.innerHTML = "";
      deleteInputButton(movies);
      filterMovies(movies, searchString);
    }
  });
}

// If its delete input text btn clicked we know input field is empty so we create movies again
function deleteInputButton(movies) {
  deleteInputBtn.addEventListener("click", function () {
    div.innerHTML = "";
    moviesOnLoad(movies);
  });
}
// Function for filtering movies
function filterMovies(movies, searchString) {
  var filteredMovies = movies.filter(function (movie) {
    return movie.movieName.toLowerCase().includes(searchString);
  });
  moviesOnLoad(filteredMovies);
}

moviesOnLoad(data);
searchMovie(data);
