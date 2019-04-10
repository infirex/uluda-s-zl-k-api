const sozlukForm = document.getElementById("sozluk-form");
const nameInput = document.getElementById("sozlukname");
const clearLastTitles = document.getElementById("clear-last-titles");
const lastTitles = document.getElementById("lastSearch").firstElementChild;

const sozluk = new Sozluk();
const ui = new UI();

eventListeners();

function eventListeners() {
    sozlukForm.addEventListener("submit", getData);
    clearLastTitles.addEventListener("click", clearAllSearched);
    lastTitles.addEventListener("click", searchTitles);
    document.addEventListener("DOMContentLoaded", getAllSearched);
}

function getData(e) {
    let baslik = nameInput.value;
    sozluk.entryleriGetir(baslik).then(response => {
        ui.showEntriesInfo(response.entrybilgi);
        ui.showTitlesInfo(response);
        ui.showProcessStatus("success", "Entryler başarıyla getirildi!");
        Storage.addAllSearchedToStorage(baslik);
        getAllSearched();
    })
        .catch(err => {
            ui.showProcessStatus("danger", "Aradığınız başlık bulunamadı!");
            ui.hideTitlesInfo();
        });

    ui.clearInputField();
    e.preventDefault();
}


function clearAllSearched() {
    ui.clearLastSearched();
    Storage.clearAllSearchedFromStorage();
}

function getAllSearched() {
    let titles = Storage.getAllSearchedFromStorage();
    let results = "";

    titles.forEach((title) => {
        results += `<a href="#" class="list-group-item list-group-item-action">${title}</a>`;
    });

    lastTitles.innerHTML = results;
}

function searchTitles(e) {
    nameInput.value=e.target.textContent;
    getData(e);

    e.preventDefault();
}  