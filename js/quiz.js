// ======================================
// SISTEMA DEL QUIZ
// ======================================


let posicion = 0;

let puntaje = 0;

let tiempo = 30;

let intervalo;

let respondida = false;



let jugador = localStorage.getItem("jugador");



if(!jugador){

    jugador = "Invitado";

}



document.getElementById("jugador").innerHTML = jugador;





// INICIAR QUIZ

mostrarPregunta();







// ======================================
// MOSTRAR PREGUNTA
// ======================================


function mostrarPregunta(){


    clearInterval(intervalo);


    respondida = false;


    tiempo = 30;



    let reloj = document.getElementById("tiempo");


    reloj.innerHTML = tiempo;


    reloj.classList.remove("tiempo-alerta");



    iniciarTiempo();





    let actual = preguntas[posicion];




    document.getElementById("numeroPregunta").innerHTML =


    "Pregunta " + (posicion + 1) + "/" + preguntas.length;





    let pregunta = document.getElementById("pregunta");



    pregunta.classList.remove("animacion");



    setTimeout(()=>{


        pregunta.classList.add("animacion");


        pregunta.innerHTML = actual.pregunta;


    },100);








    let html = "";



    actual.opciones.forEach((opcion,index)=>{



        html += `


        <button

        class="respuesta"

        onclick="seleccionar(${index},this)">


        ${opcion}


        </button>


        `;


    });





    document.getElementById("opciones").innerHTML = html;






    let progreso =

    ((posicion) / preguntas.length) * 100;




    document.getElementById("barra").style.width =

    progreso + "%";



}









// ======================================
// SELECCIONAR RESPUESTA
// ======================================


function seleccionar(valor, boton){



    if(respondida){

        return;

    }



    respondida = true;



    clearInterval(intervalo);



    let correcta = preguntas[posicion].respuesta;



    let botones = document.querySelectorAll(".respuesta");





    botones.forEach(btn=>{


        btn.disabled = true;


    });







    if(valor === correcta){


        boton.classList.add("correcta");


        puntaje++;


    }


    else{


        boton.classList.add("incorrecta");


        botones[correcta].classList.add("correcta");


    }



}









// ======================================
// BOTÓN SIGUIENTE
// ======================================


document.getElementById("siguiente")
.onclick=function(){





    if(!respondida){


        mostrarAviso(

        "⚠️ Selecciona una alternativa para continuar"

        );


        return;


    }





    siguientePregunta();



};









// ======================================
// CAMBIO DE PREGUNTA
// ======================================


function siguientePregunta(){



    posicion++;





    if(posicion < preguntas.length){



        mostrarPregunta();



    }


    else{



        finalizar();



    }



}









// ======================================
// TEMPORIZADOR
// ======================================


function iniciarTiempo(){



    intervalo = setInterval(()=>{



        tiempo--;





        document.getElementById("tiempo").innerHTML = tiempo;








        if(tiempo <= 10){



            document.getElementById("tiempo")

            .classList.add("tiempo-alerta");



        }








        if(tiempo <= 0){



            clearInterval(intervalo);





            mostrarAviso(

            "⏰ Tiempo agotado"

            );







            // Pasar automáticamente

            setTimeout(()=>{



                siguientePregunta();




            },1000);





        }




    },1000);



}









// ======================================
// FINALIZAR QUIZ
// ======================================


function finalizar(){



    clearInterval(intervalo);




    localStorage.setItem(

    "jugador",

    jugador

    );




    localStorage.setItem(

    "puntaje",

    puntaje

    );





    localStorage.setItem(

    "total",

    preguntas.length

    );






    window.location.href = "resultado.html";



}









// ======================================
// AVISO ANIMADO
// ======================================


function mostrarAviso(texto){



    let aviso = document.getElementById("aviso");




    if(!aviso){



        aviso = document.createElement("div");



        aviso.id="aviso";



        document.querySelector(".quiz-box")

        .appendChild(aviso);



    }






    aviso.innerHTML = texto;





    aviso.classList.remove("mostrar");





    setTimeout(()=>{



        aviso.classList.add("mostrar");



    },100);








    setTimeout(()=>{



        aviso.classList.remove("mostrar");



    },2500);





}