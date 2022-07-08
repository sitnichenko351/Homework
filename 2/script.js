const container = document.getElementById("container");

const renderGreeting = (isInitial, visitsCount = 0) => {
    const greetingElement = document.createElement("p");
    const visitsCountElement = document.createElement("p");
    greetingElement.innerText = "Добро пожаловать";
    visitsCountElement.innerText = `Вы заходили раз: ${visitsCount}`;

    container.append(greetingElement);

    if (isInitial) {
        container.append(visitsCountElement);
    }
};

if (localStorage.getItem("visits")) {
    const visits = JSON.parse(localStorage.getItem("visits"));
    const updatedVisits = visits + 1;
    localStorage.setItem("visits1", updatedVisits);

    renderGreeting(true, updatedVisits);
}   else {
    localStorage.setItem("visits", 1);
    renderGreeting(false);
}