import "./styles.css";

const app = document.getElementById("app");

const key = `OzX745vSydlAYWjafmOGYRmVxe9LUFzc8RizRmdL`;
const url = `https://api.nasa.gov/planetary/apod?api_key=${key}`;

function getData() {
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

async function renderData() {
  app.innerHTML = `<h1>Loading...</h1>`;
  let stuff = await getData();

  let author = stuff.copyright;
  let image = stuff.url;
  let description = stuff.explanation;

  let cardMarkup = `
  <div class="jumbotron">
  <h1>Nasa API</h1>
    <div class="card" style="width:400px">
      <img class="card-img-top" src="${image}" alt="Card image">
      <div class="card-body">
        <h4 class="card-title">${author}</h4>
        <p class="card-text">${description}</p>
        <a href="${stuff.url}" class="btn btn-warning">More Info</a>
      </div>
    </div>
  </div>
  `;

  app.innerHTML = cardMarkup;
}

renderData();
