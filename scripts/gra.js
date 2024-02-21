import { getWyraz, randomWyraz } from "./data.js";

getWyraz();

let granie = 0;
let graHTML = "";
let licznik = 0;
let aktualneSlowo = "";
let userInput;
let aktualneSlowoTablica = [];
let randomWyrazTablica = Array.from(randomWyraz);
console.log(randomWyrazTablica);

function generujInputy() {
  let i = 0;
  let j = 0;
  let k = 0;
  randomWyrazTablica.forEach(() => {
    graHTML += `<div class="js-wpisz-${i++}"> <input type="text" class="wyrazdozgadcss js-input-wpis-${j++}" id="input-${k++}"></div>`;
  });
  document.querySelector(".js-gra").innerHTML = graHTML;
}

//Pobierz wyraz i wygeneruj inputy sprawdz czy gra trwa
document.getElementById("zacznij").addEventListener("click", () => {
  if (granie === 0) {
    getWyraz();
    licznik = 0;
    aktualneSlowo = "";
    aktualneSlowoTablica = [];
    randomWyrazTablica = Array.from(randomWyraz);
    generujInputy();
    granie = 1;
    document.getElementById("zacznij").value = "Stop";
    document.getElementById("zacznij").className = "stop"; // Zaktualizuj wartość przycisku
  } else {
    granie = 0;
    document.getElementById("zacznij").value = "Start";
    document.getElementById("zacznij").className = "zacznij";
    console.log("Gra zatrzymana");
    aktualneSlowoTablica = [];
    document.querySelector(".js-gra").innerHTML = "";
    document.querySelector(
      ".js-gra"
    ).innerHTML = `<div class="word js-gra wyraz">Wylosuj słowo do zgadnięcia</div>`;
    graHTML = "";
    aktualneSlowo = "";
  }
});

document.getElementById("wpisGracza").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    licznik++;
    document.querySelector(".feedback").innerHTML = `Licznik: ${licznik}`;
    userInput = e.target.value.trim();
    console.log(licznik);

    if (randomWyraz.includes(userInput)) {
      if (aktualneSlowo.includes(userInput)) {
        console.log(`To juz bylo !`);
      } else {
        updateDisplay();
      }
    } else {
      console.log(`nie ma`);
    }
  }
});

//sprawdz czy w inpucie jest to samo slowo i je dodaj
function updateDisplay() {
  for (let i = 0; i < randomWyrazTablica.length; i++) {
    if (randomWyrazTablica[i] === userInput) {
      aktualneSlowo += userInput;
      aktualneSlowoTablica[i] = userInput;
      document.getElementById(`input-${i}`).value = userInput;
      document.getElementById(`input-${i}`).classList.add(`poprawne`);
      console.log(aktualneSlowo);
      console.log(aktualneSlowoTablica);
      console.log(randomWyrazTablica);
    }
  }
}

document.getElementById("jeszcze-raz").addEventListener("click", () => {
  if (granie === 1) {
    graHTML = "";
    getWyraz();
    licznik = 0;
    aktualneSlowoTablica = [];
    aktualneSlowo = "";
    randomWyrazTablica = Array.from(randomWyraz);
    generujInputy();
    console.log(randomWyrazTablica);
  } else {
    alert("Gra nie została jeszcze rozpoczęta!");
  }
});

setInterval(() => {
  if (
    randomWyrazTablica.every(
      (element, index) => element === aktualneSlowoTablica[index]
    )
  ) {
    alert(`Wygrales w ${licznik} ruchach.`);
    graHTML = "";
    getWyraz();
    licznik = 0;
    aktualneSlowoTablica = [];
    aktualneSlowo = "";
    aktualneSlowoTablica = [];
    randomWyrazTablica = Array.from(randomWyraz);
    generujInputy();
  }
}, 1000);
