// ======================================
// LEER RANKING FIREBASE
// ======================================


import { db }

from

"./firebase.js";



import {

collection,

getDocs,

query,

orderBy

}

from

"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";





const tabla = document.getElementById("tablaRanking");





async function cargarRanking(){


try{



console.log("Conectando Firebase...");



const consulta = query(

collection(db,"ranking"),

orderBy("puntaje","desc")

);



const resultado = await getDocs(consulta);




console.log(
"Resultados encontrados:",
resultado.size
);





let html="";


let posicion=1;




resultado.forEach((doc)=>{


let datos = doc.data();




html += `


<div class="jugador">


<h2>

${posicion}° ${datos.nombre}

</h2>



<p>

🏆 Puntaje:

${datos.puntaje}/${datos.total}

</p>



<p>

📊 ${datos.porcentaje}%

</p>



</div>


`;



posicion++;



});





tabla.innerHTML = html;



}



catch(error){


console.error(
"ERROR FIREBASE:",
error
);



tabla.innerHTML =
"Error cargando ranking";


}



}




cargarRanking();