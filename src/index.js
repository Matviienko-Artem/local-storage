let wathedFilmLibrary = [];
let queueFilmLibrary = [];

// ================== тут можно реализовать по клику на кнопку
// ================== добавление в ту или иную библиотеку
// ================== вопрос реализации этого самого клика ????

function addedToWathedLibrary(film) {
  wathedFilmLibrary.push(film);
  console.log(wathedFilmLibrary);
  localStorage.setItem("wathedfilm", JSON.stringify(wathedFilmLibrary));
}

function addedToQueueLibrary(film) {
  queueFilmLibrary.push(film);
  console.log(queueFilmLibrary);
  localStorage.setItem("queuefilm", JSON.stringify(queueFilmLibrary));
}

const q = {
  id: 1,
  theme: "Том и Джери",
  isAuthenticated: true,
  options: [1, 2],
};

const w = {
  id: 55,
  theme: "Ну погоди!",
  isAuthenticated: false,
  options: [1, 2, 3, 4],
};

const e = {
  id: 101,
  theme: "Алладин",
  isAuthenticated: true,
  options: [1, 3],
};

addedToWathedLibrary(q);
addedToWathedLibrary(w);
addedToWathedLibrary(w);
addedToWathedLibrary(w);
addedToWathedLibrary(w);

addedToQueueLibrary(e);
addedToQueueLibrary(q);
addedToQueueLibrary(w);

function readWathedLocalStorage() {
  const savedSettings = localStorage.getItem("wathedfilm");
  const parsedSettings = JSON.parse(savedSettings);
  parsedSettings.map((e) => console.log(e));
}

function readQueueLocalStorage() {
  const savedSettings = localStorage.getItem("queuefilm");
  const parsedSettings = JSON.parse(savedSettings);
  parsedSettings.map((e) => console.log(e));
}

readWathedLocalStorage();
readQueueLocalStorage();

// d407875648143dbc537f3d16fab2b882  -  my key

// Приклад API-запиту
// https://api.themoviedb.org/3/movie/550?api_key=d407875648143dbc537f3d16fab2b882

// Токен доступу для читання API (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDA3ODc1NjQ4MTQzZGJjNTM3ZjNkMTZmYWIyYjg4MiIsInN1YiI6IjYwMTAwMTA3MjJlNDgwMDAzZTA4NzZkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TOUKxZRdZjm93mdeBLVGFrrgN-rC0FIjiJwE6aYk4-k

console.log("Отсюда начинаентся API");

const MY_KEY = `?api_key=d407875648143dbc537f3d16fab2b882`;
const BASIC_URL = `https://api.themoviedb.org/3`;
const SEARCH_ID = `/movie/550`;
const SEARCH_MOVIE = `/search/movie/`;
const QUERY = `&query=`;
const GET_POPULAR = `/movie/popular`;
const GET_TRENDING = `/trending/{media_type}/{time_window}`;
const GET_LATEST = `/movie/latest`;

const GET_LANGUAGES = {
  RU: "ru",
  UK: "uk",
  EN: "en",
};

const LANGUAGES = `&language=${GET_LANGUAGES.RU}`;

fetch(`${BASIC_URL}${SEARCH_MOVIE}${MY_KEY}${LANGUAGES}${QUERY}джек восьмёркин`)
  .then((response) => response.json())
  .then((e) => console.log(e))
  .catch((error) => console.log(error));

// ================= тут попытка сделать строку поиска =======

const inputRef = document.querySelector(".input-js");

function inputRefFuncion() {
  const searchQuery = inputRef.value;

  console.log(searchQuery);
}

inputRef.addEventListener("input", fetchByName); // тут что-то не работате

function fetchByName(name) {
  return fetch(
    `${BASIC_URL}${SEARCH_MOVIE}${MY_KEY}${LANGUAGES}${QUERY}${name}`
  ).then((response) => {
    return response.json();
  });
}

fetchByName("джек");

// function searchByName(name) {
//   // name.preventDefault();

//   const searchQuery = inputRef.value;

//   console.log(searchQuery);

//   fetchByName(searchQuery)
//     .then(console.log)
//     .catch((name) => console.log(name));
// }

// searchByName("джек ричер");
