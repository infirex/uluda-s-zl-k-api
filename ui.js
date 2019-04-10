class UI {
    constructor() {
        this.entries = document.getElementById("entries");
        this.clearLastTitles = document.getElementById("clear-last-titles");
        this.inputField = document.getElementById("sozlukname");
        this.cardBody = document.querySelector(".card-body");
        this.infos = document.getElementById("infos");
        this.lastTitles=document.getElementById("lastSearch");
    }

    clearInputField() {
        this.inputField.value = "";
    }

    showEntriesInfo(entryler) {
        this.entries.innerHTML = "";
        entryler.forEach((entry) => {
            this.entries.innerHTML += `
            <ul class="list-group list-group-flush">
                <li class="list-group-item font-weight-bold"><span class="badge badge-success badge-pill mr-2">${entry.entrysirano}</span>${entry.metin}</li> 
            </ul> 
            `;            
        });

    }

    showTitlesInfo(title){       
        this.infos.classList.remove("d-none");
        this.infos.innerHTML = `
            <div class="card-body">
                <a href="${title.url}" target="_blank" <h5 class="font-weight-bold mb-3 text-dark">Başlık : <span class="text-danger">${title.baslik}</span></h5></a>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Başlıktaki entry sayısı : <span class="text-primary">${title.toplamentrysayisi}</span></li>
                <li class="list-group-item">Başlığın oluşturulma tarihi : <span class="text-primary">${title.tarih}</span></li>
            </ul>`;        
    }
    

    hideTitlesInfo(){
        this.infos.classList.add("d-none");
    }

    showProcessStatus(type, message) {
        const alert = document.createElement("div");
        alert.className = `alert alert-${type}`;
        alert.textContent = message;

        this.cardBody.appendChild(alert);
        setTimeout(() => {
            alert.remove();
        }, 2000);
    }

    clearLastSearched(){
        while(this.lastTitles.firstElementChild.firstChild!=null){//ui dan silme
            this.lastTitles.firstElementChild.removeChild(this.lastTitles.firstElementChild.firstChild);
        }
        //storage dan silme
        Storage.clearAllSearchedFromStorage();
    }
}