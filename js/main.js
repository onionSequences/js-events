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
function moviesOnLoad(movies) {
  movies.forEach(function (movie) {
    var createdMovie = structureForMovie(movie);
    div.append(createdMovie);
  });
}

// Structure for each movie and delete button click event
function structureForMovie(movie) {
  var image = document.createElement("img");
  var name = document.createElement("p");
  var article = document.createElement("article");
  var deleteMovieBtn = document.createElement("button");

  deleteMovieBtn.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
  deleteMovieBtn.addEventListener("click", function () {
    var index = data.indexOf(movie);
    data.splice(index, 1);
    article.remove();

    if (!data.length) {
      // Prevent search on empty arr
      div.innerHTML = "<p>Movie list is empty</p>";
      input.setAttribute("disabled", true);
      searchBtn.setAttribute("disabled", true);
    }
    if (!div.innerHTML) div.innerHTML = "<p>Movie not found</p>"; // When search results is deleted
  });

  article.append(deleteMovieBtn);

  image.setAttribute("alt", movie.movieName);
  image.setAttribute("src", movie.imageUrl);
  article.append(image);

  name.textContent = movie.movieName;
  article.append(name);
  return article;
}

function searchMovie(movies) {
  var errorMsg = document.createElement("p");
  errorMsg.textContent = "Please enter movie name";

  // SEARCH BUTTON //
  searchBtn.addEventListener("click", function (e) {
    var searchString = input.value.toLowerCase();
    if (!searchString) {
      e.preventDefault();
      input.parentElement.append(errorMsg);
    } else {
      e.preventDefault();
      div.innerHTML = "";
      filterMovies(movies, searchString);
    }
  });

  // INPUT SEARCH //
  input.addEventListener("input", function (e) {
    var searchString = e.target.value.toLowerCase();

    // Display delete input button X (Added feature beside homework)
    if (!searchString) {
      deleteInputBtn.style.display = "none";
      div.innerHTML = "";
      moviesOnLoad(movies);
    } else {
      errorMsg.remove();
      deleteInputBtn.style.display = "inline-block";
      div.innerHTML = "";
      filterMovies(movies, searchString);
      deleteInputButton(movies);
    }
  });
}

// If its delete input text btn clicked we know input field is empty so we create movies again
function deleteInputButton(movies) {
  deleteInputBtn.addEventListener("click", function () {
    deleteInputBtn.style.display = "none";
    div.innerHTML = "";
    moviesOnLoad(movies);
  });
}
// Function for filtering movies
function filterMovies(movies, searchString) {
  var filtered = movies.filter(function (movie) {
    return movie.movieName.toLowerCase().includes(searchString);
  });
  filtered.length
    ? moviesOnLoad(filtered)
    : (div.innerHTML = "<p>Movie not found</p>");
}

moviesOnLoad(data);
searchMovie(data);
