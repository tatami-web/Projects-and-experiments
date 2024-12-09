const translations = {
  en: {
    title: "Current Time",
    loading: "Loading...",
    languageLabel: "Language",
  },
  es: {
    title: "Hora Actual",
    loading: "Cargando...",
    languageLabel: "Idioma",
  },
};

let currentLanguage = "en";

function updateClock() {
  const clockElement = document.getElementById("clock");
  const localTime = new Date();

  fetch("https://worldtimeapi.org/api/ip")
    .then((response) => response.json())
    .then((data) => {
      const networkTime = new Date(data.datetime);
      clockElement.textContent = formatTime(networkTime);
    })
    .catch(() => {
      clockElement.textContent = formatTime(localTime);
    });
}

function formatTime(date) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const time = date.toLocaleTimeString(
    currentLanguage === "en" ? "en-US" : "es-ES"
  );
  const formattedDate = date.toLocaleDateString(
    currentLanguage === "en" ? "en-US" : "es-ES",
    options
  );
  return `${formattedDate}, ${time}`;
}

function changeLanguage(lang) {
  currentLanguage = lang;
  document.getElementById("title").textContent = translations[lang].title;
  document.querySelector('label[for="language"]').textContent =
    translations[lang].languageLabel;
  document.getElementById("clock").textContent = translations[lang].loading;
  updateClock();
}

document.getElementById("language").addEventListener("change", (event) => {
  changeLanguage(event.target.value);
});

setInterval(updateClock, 1000);

changeLanguage(currentLanguage);
