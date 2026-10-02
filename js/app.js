// ======================================
// INICIO QUIZ
// ======================================



document
.getElementById("btnInicio")
.addEventListener("click",()=>{



let nombre = document
.getElementById("nombreJugador")
.value
.trim();





if(nombre === ""){


mostrarMensaje(

"⚠️ Ingresa tu nombre para comenzar"

);


return;


}





localStorage.setItem(

"jugador",

nombre

);





window.location.href="quiz.html";



});







// ======================================
// BOTÓN RANKING
// ======================================



document
.getElementById("btnRanking")
.addEventListener("click",()=>{



window.location.href="ranking.html";



});







// ======================================
// MENSAJE ANIMADO
// ======================================



function mostrarMensaje(texto){



let aviso = document.getElementById("aviso");




if(!aviso){



aviso=document.createElement("div");



aviso.id="aviso";



document.querySelector(".quiz-box")
.appendChild(aviso);



}





aviso.innerHTML=texto;



aviso.classList.add("mostrar");





setTimeout(()=>{


aviso.classList.remove("mostrar");


},3000);



}