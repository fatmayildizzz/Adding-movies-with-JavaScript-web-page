
function UI() {

}

UI.prototype.addFilmToUI = function(newFilm){
   /*
    <!-- <tr>
      <td><img src="" class="img-fluid img-thumbnail"></td>
        <td></td>
         <td></td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr> -->
    <!-- <tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>
    <td></td>
    <td></td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr> --> */

    const filmlist = document.getElementById("films");

    filmlist.innerHTML +=`
    
   <tr style = "background-color: rgb(234, 232, 232);">
      <td style ="color: rgb(81, 121, 185);font-size: large;"><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
      <td style ="color: rgb(81, 121, 185);font-size: large;">${newFilm.title}</td>
      <td style ="color:rgb(81, 121, 185);font-size: large;">${newFilm.director}</td>
      <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr> 
    `;



}

UI.prototype.clearInputs = function (element1, element2,element3) {

  element1.value = "";
  element2.value = "";
  element3.value = "";


}

UI.prototype.displayMessage = function(message, type){

  const cardbody = document.querySelector(".card-body");

  const div = document.createElement("div");

  div.className = `alert alert-${type}`;
  div.textContent= message;

  cardbody.appendChild(div);

  setTimeout(function(){
    div.remove();


  },2000)



}

UI.prototype.loadAllFilms= function(films){

  const filmList =document.getElementById("films");

  films.forEach(function(film){

    filmList.innerHTML += `
    
    <tr style ="background-color: rgb(234, 232, 232);">
       <td style ="color: rgb(81, 121, 185);font-size: large;"><img src="${film.url}" class="img-fluid img-thumbnail"></td>
       <td style ="color: rgb(81, 121, 185);font-size: large;">${film.title} </td>
       <td style ="color: rgb(81, 121, 185);font-size: large;" >${film.director} </td>
       <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
     </tr> 
     `;
    

  });
  
}
 UI.prototype.deleteFilmFromUi= function(element){
  element.parentElement.parentElement.remove();

  
 }

 UI.prototype.deleteAllFilmFromUi= function(element){
  
  while(element.firstElementChild !== null){
    element.firstElementChild.remove();
  }

 }
