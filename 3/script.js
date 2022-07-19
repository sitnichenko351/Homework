





const container = document.getElementById("container");

const getCountryInfo = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const info = await response.json();
    const { country_name, country_capital, currency } = info;

    const flagUrl = await getCountryFlag(country_name);
    return {
        country_capital,
        country_name,
        currency,
        flagUrl,
    };
};

const getCountryFlag = async (name) => {
    const response = await fetch(`https://restcountries.com/v2/name/${name}`);
    const [{ flag }] = await response.json();

    return flag;
};

const renderCountryInfo = async () => {
    const { country_capital, currency, country_name, flagUrl } =
        await getCountryInfo();

    const card = document.createElement("div");
    const nameElement = document.createElement("h3");
    const capitalElement = document.createElement("h4");
    const currencyElement = document.createElement("p");
    const flagElement = document.createElement("img");

    card.classList.add("card");
    flagElement.classList.add("flag-img");

    nameElement.innerText = country_name;
    capitalElement.innerText = country_capital;
    currencyElement.innerText = currency;
    flagElement.src = flagUrl;

    card.append(nameElement, capitalElement, currencyElement, flagElement);
    container.append(card);
};

renderCountryInfo();

// 2

const form = document.getElementById("characterForm");
const input = document.getElementById("characterFrom");
const characterContainer = document.getElementById("containerChar");

const getCharacher = async (id) => {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    const character = await response.json();
    
    renderCharacter(character);
};

const getFilms = async (urls) => {
    const requests = urls.map((url) => fetch(url));

    const responses = await Promise.all(requests);
    return Promise.all(responses.map((req) => req.json()));
};

const renderCharacter = ({ name, films: filmUrls }) => {
    const card = document.createElement("div");
    const nameElem = document.createElement("h4");
    const getFilmsButton = document.createElement("button");
    nameElem.inner
    card.classList.add("card");
    getFilmsButton.innerText = "Фильмы";
    getFilmsButton.addEventListener("click", async () => {
        const films = await getFilms(filmUrls);
        renderFilms(card, films);
    });
    card.append(nameElem, getFilmsButton);
    characterContainer.append(card);
};

const renderFilms = (container, films) => {
    films.forEach((film) => {
        const nameElem = document.createElement("h5");
        nameElem.innerText = film.title;
        container.append(nameElem);
    });
};

const handleSubmit = (event) => {
    event.preventDefault();

    const id = input.value;
    getCharacher(id);
    characterContainer.innerHTML = "";
}

form.addEventListener("submit", handleSubmit)