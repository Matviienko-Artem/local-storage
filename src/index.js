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
