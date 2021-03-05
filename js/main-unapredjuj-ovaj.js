/* WHAT SHOULD YOU DO ?

- Create a page which should contain search field in the top

- Once page is loaded it should have list of at least 12 movies

- Each movie should have image and a name (should be contained in array of objects)

- Once you type something in the search field, it should filter movies by name, and display only movies that match

BONUS:

Add remove icon to each movie. When icon is clicked, movie should be removed from the list */

/* <article>
  <img src="putanja">
  <p>Naziv Filma</p>
</article> */

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

function randomNumber(arr) {
  return Math.round(Math.random() * arr.length - 1);
}
//Let's save original data for later search function
function copyOriginalArray(arr) {
  var newArr = new Array();
  arr.forEach(function (e) {
    newArr.push(e);
  });
  return newArr;
}

function structureForMovie(arr) {
  var movie = arr[0]; // Get rid of array

  var article = document.createElement("article");
  var image = document.createElement("img");
  var name = document.createElement("p");

  image.setAttribute("src", movie.imageUrl);
  article.append(image);

  name.textContent = movie.movieName;
  article.append(name);
  return article;
}

function randomMoviesOnLoad(arr) {
  var movies = copyOriginalArray(arr);

  // Show 12 random movies on load
  for (var i = 0; i < 12; i++) {
    var randomNum = randomNumber(movies);
    var randomMovie = movies.splice(randomNum, 1);
  }
  return structureForMovie(randomMovie);
}
function test(arr) {
  var div = document.querySelector(".movies");
  var spremno = randomMoviesOnLoad(arr);
  div.append(spremno);
}
// randomMoviesOnLoad(data);
test(data);
// console.log(data, movies);
