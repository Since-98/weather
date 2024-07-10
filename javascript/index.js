function updateTime() {
    // Dublin
    let dublinElement = document.querySelector("#dublin");
    if (dublinElement) {
      let dublinDateElement = dublinElement.querySelector(".date");
      let dublinTimeElement = dublinElement.querySelector(".time");
      let dublinTime = moment().tz("Europe/Dublin");
  
      dublinDateElement.innerHTML = dublinTime.format("MMMM	Do YYYY");
      dublinTimeElement.innerHTML = dublinTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  
    // Rome
    let romeElement = document.querySelector("#rome");
    if (romeElement) {
      let romeDateElement = romeElement.querySelector(".date");
      let romeTimeElement = romeElement.querySelector(".time");
      let romeTime = moment().tz("Europe/Rome");
  
      romeDateElement.innerHTML = romeTime.format("MMMM	Do YYYY");
      romeTimeElement.innerHTML = romeTime.format("h:mm:ss [<small>]A[</small>]");
    }
    //Melbourne
    let melbourneElement = document.querySelector("#melbourne");
    if (melbourneElement) {
      let melbourneDateElement = melbourneElement.querySelector(".date");
      let melbourneTimeElement = melbourneElement.querySelector(".time");
      let melbourneTime = moment().tz("Europe/Melbourne");
  
      melbourneDateElement.innerHTML = melbourneTime.format("MMMM	Do YYYY");
      melbourneTimeElement.innerHTML = melbourneTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  }
  function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
    </div>
    `;
  }
  function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
      <div class="city" >
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
      "A"
    )}</small></div></div><a href="index.html">All cities</a>`;
  }
  updateTime();
  setInterval(updateTime, 1000);
  
  let citiesSelectElement = document.querySelector("#city");
  citiesSelectElement.addEventListener("change", updateCity);
  
  let citiesSelect = document.querySelector("#city");
  citiesSelectElement.addEventListener("change", updateCity);