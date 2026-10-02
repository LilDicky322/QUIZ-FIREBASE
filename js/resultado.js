// =====================================
// RESULTADO + FIREBASE
// =====================================


import {db}

from

"./firebase.js";



import {


collection,

addDoc,

serverTimestamp


}

from


"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";






// DATOS DEL JUGADOR


let jugador =

localStorage.getItem("jugador");



let puntaje =

Number(localStorage.getItem("puntaje"));



let total =

Number(localStorage.getItem("total"));





// MOSTRAR RESULTADO



document.getElementById("nombreJugador")
.innerHTML =

"👤 " + jugador;



document.getElementById("puntos")
.innerHTML =

puntaje;



document.getElementById("total")
.innerHTML =

total;





// CALCULO


let porcentaje =

Math.round((puntaje / total) * 100);






let medalla =

document.getElementById("medalla");



let mensaje =

document.getElementById("mensaje");






if(porcentaje >= 90){


medalla.innerHTML="🥇";


mensaje.innerHTML=

"🌟 Excelente dominio del tema";


}


else if(porcentaje >=70){


medalla.innerHTML="🥈";


mensaje.innerHTML=

"👏 Buen trabajo";


}


else{


medalla.innerHTML="🥉";


mensaje.innerHTML=

"📚 Sigue practicando";


}






// GUARDAR DATOS FIREBASE


guardarResultado();






async function guardarResultado(){


try{


await addDoc(

collection(db,"ranking"),

{


nombre:

jugador,



puntaje:

puntaje,



total:

total,



porcentaje:

porcentaje,



fecha:

new Date().toLocaleDateString(),



hora:

new Date().toLocaleTimeString(),



creado:

serverTimestamp()


}


);



console.log(

"✅ Resultado guardado en Firebase"

);



}


catch(error){



console.error(

"❌ Error Firebase:",

error

);


}



}
// ======================================
// BOTÓN VER RANKING
// ======================================


document
.getElementById("btnRanking")
.addEventListener("click",()=>{


window.location.href="ranking.html";


});