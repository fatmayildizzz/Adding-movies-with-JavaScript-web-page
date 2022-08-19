const form = document.getElementById("film-form");

const titleEleement = document.querySelector("#title");

const directorElement = document.querySelector("#director");

const urlElement = document.querySelector("#url");

const cardbody =document.querySelectorAll(".card-body")[1];

const tbody= document.getElementById("films");

const clear = document.getElementById("clear-films");




// UI Objesini Baslatma

const ui = new UI();

// Storage Objesi Uretme

const storage = new Storage ();


//Tum eventleri yukleme

eventListeners();

function eventListeners(){

    form.addEventListener("submit",addFilm);

    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();

        ui.loadAllFilms(films);



    });

    cardbody.addEventListener("click",deleteFilm);

    clear.addEventListener("click",clearAllFilms);

   



}


function addFilm(e){



    const title = titleEleement.value;
    const director = directorElement.value;
    const url = urlElement.value;

   if(title ==="" || director ==="" || url ==="" ){

    ui.displayMessage("Tum alanlari doldurun", "danger");


   }
   else{

    const newFilm = new Film(title,director,url);
   
    ui.addFilmToUI(newFilm); // Ara yuze ekleme
    storage.addFilmToStorage(newFilm);
     //Storage filmleri ekleme

    ui.displayMessage("Film basari ile eklendi....","success");


   }

   ui.clearInputs(titleEleement, urlElement,directorElement);


    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id==="delete-film"){
        ui.deleteFilmFromUi(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessage("Silme Islemi Basarili...","success");
    }



}


function clearAllFilms(){

    if(confirm("Emin misiniz?")){ 
        ui.deleteAllFilmFromUi(tbody);

    storage.deleteAllFilmFromStorage(tbody);

    }
    
  
}