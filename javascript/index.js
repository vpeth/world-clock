function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let costaRicaElement = document.querySelector("#costaRica");
  if (costaRicaElement) {
    let costaRicaDateElement = costaRicaElement.querySelector(".date");
    let costaRicaTimeElement = costaRicaElement.querySelector(".time");
    let costaRicaTime = moment().tz("America/Costa_Rica");

    costaRicaDateElement.innerHTML = costaRicaTime.format("MMMM Do YYYY");
    costaRicaTimeElement.innerHTML = costaRicaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
      <div class="city" id="${cityName}">
        <div>
          <h2>${
            cityName.charAt(0).toUpperCase() +
            cityName.slice(1).replace("_", " ")
          }</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
      </div>
    `;
}

updateTime();

setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
