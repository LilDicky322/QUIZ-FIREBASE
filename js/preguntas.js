// ======================================
// BANCO DE PREGUNTAS
// SISTEMA NACIONAL DE CONTROL
// ======================================


const bancoPreguntas = [


{
pregunta:
"¿Qué se entiende por Sistema Nacional de Control?",

opciones:[

"Un conjunto de instituciones encargadas de administrar el presupuesto público.",

"Un conjunto de órganos, normas y procedimientos destinados a realizar el control de la gestión pública.",

"Una institución encargada exclusivamente de investigar delitos.",

"Un sistema encargado de contratar a los servidores públicos."

],

respuesta:
"Un conjunto de órganos, normas y procedimientos destinados a realizar el control de la gestión pública."

},



{
pregunta:
"¿Cuál es la principal institución del Sistema Nacional de Control?",

opciones:[

"Ministerio de Economía y Finanzas.",

"Defensoría del Pueblo.",

"Contraloría General de la República.",

"Presidencia del Consejo de Ministros."

],

respuesta:
"Contraloría General de la República."

},




{
pregunta:
"¿Cuál es una de las principales finalidades del control gubernamental?",

opciones:[

"Controlar las actividades personales de los ciudadanos.",

"Verificar que los recursos y bienes del Estado sean utilizados correctamente.",

"Elaborar las leyes que regulan al Estado.",

"Administrar directamente todas las entidades públicas."

],

respuesta:
"Verificar que los recursos y bienes del Estado sean utilizados correctamente."

},




{
pregunta:
"¿Qué ley establece las normas fundamentales del Sistema Nacional de Control?",

opciones:[

"Ley N.° 27444",

"Ley N.° 27785",

"Ley N.° 27806",

"Ley N.° 30057"

],

respuesta:
"Ley N.° 27785"

},




{
pregunta:
"¿Qué aspecto puede revisar el control gubernamental dentro de una entidad pública?",

opciones:[

"El uso de los recursos públicos y el cumplimiento de las normas.",

"Las preferencias personales de los trabajadores.",

"Las actividades familiares de los funcionarios.",

"Las opiniones políticas de los ciudadanos."

],

respuesta:
"El uso de los recursos públicos y el cumplimiento de las normas."

},




{
pregunta:
"¿Por qué es importante que exista un Sistema Nacional de Control?",

opciones:[

"Porque permite supervisar la gestión pública y contribuir al uso adecuado de los recursos del Estado.",

"Porque reemplaza a todas las autoridades de las entidades públicas.",

"Porque se encarga de elaborar el presupuesto de cada ciudadano.",

"Porque elimina la necesidad de que existan normas públicas."

],

respuesta:
"Porque permite supervisar la gestión pública y contribuir al uso adecuado de los recursos del Estado."

},




{
pregunta:
"Una municipalidad compra materiales para construir una obra pública, pero durante una revisión se descubre que parte de los materiales no fueron utilizados. ¿Qué debería analizar el control?",

opciones:[

"La cantidad de trabajadores de la municipalidad.",

"El uso, destino y manejo de los recursos públicos.",

"La opinión personal del alcalde.",

"El número de habitantes del distrito."

],

respuesta:
"El uso, destino y manejo de los recursos públicos."

},




{
pregunta:
"Una entidad pública realiza el pago por una obra que figura como terminada, pero al realizar una visita se observa que todavía está inconclusa. ¿Qué debería verificarse?",

opciones:[

"Si la obra realmente fue ejecutada de acuerdo con lo contratado y si el pago estuvo justificado.",

"Si los trabajadores tienen experiencia.",

"Si la población conoce al alcalde.",

"Si la entidad tiene suficientes oficinas."

],

respuesta:
"Si la obra realmente fue ejecutada de acuerdo con lo contratado y si el pago estuvo justificado."

},




{
pregunta:
"Durante una revisión se encuentra que una entidad utilizó dinero público para una actividad que no estaba contemplada en su finalidad. ¿Qué debería hacer el control?",

opciones:[

"Ignorar el hecho porque se utilizó dinero de la misma entidad.",

"Analizar si el uso de los recursos fue correcto y si se incumplieron las normas.",

"Aprobar automáticamente el gasto.",

"Suspender todas las actividades de la entidad."

],

respuesta:
"Analizar si el uso de los recursos fue correcto y si se incumplieron las normas."

},




{
pregunta:
"Una municipalidad informa que una obra costó S/ 500 000, pero durante la revisión se encuentran documentos que generan dudas sobre algunos gastos. ¿Qué sería necesario hacer?",

opciones:[

"Revisar la documentación y verificar si los gastos realizados corresponden a la obra.",

"Dar por terminado el caso sin revisar los documentos.",

"Preguntar únicamente a los vecinos.",

"Eliminar los documentos que generan dudas."

],

respuesta:
"Revisar la documentación y verificar si los gastos realizados corresponden a la obra."

},




{
pregunta:
"Una entidad pública detecta un problema durante la ejecución de una obra antes de que esta termine. ¿Por qué sería importante realizar un control oportuno?",

opciones:[

"Porque permite advertir situaciones que podrían afectar el cumplimiento de la obra y tomar medidas.",

"Porque permite cancelar automáticamente la obra.",

"Porque evita que la población conozca el problema.",

"Porque reemplaza al responsable de la obra."

],

respuesta:
"Porque permite advertir situaciones que podrían afectar el cumplimiento de la obra y tomar medidas."

},




{
pregunta:
"Después de una acción de control se identifica una irregularidad en el uso de recursos públicos. ¿Qué debería considerarse para evitar que vuelva a ocurrir?",

opciones:[

"Analizar las causas del problema y establecer medidas de corrección o mejora.",

"Ocultar la irregularidad para evitar conflictos.",

"Evitar futuras acciones de control.",

"Culpar directamente a todos los trabajadores."

],

respuesta:
"Analizar las causas del problema y establecer medidas de corrección o mejora."

}



];




// ======================================
// SELECCIONAR 10 PREGUNTAS ALEATORIAS
// ======================================


function obtenerPreguntasAleatorias(){


let preguntasMezcladas = [...bancoPreguntas];



// Mezclar preguntas

preguntasMezcladas.sort(()=>Math.random()-0.5);



// Tomar solo 10

let seleccionadas = preguntasMezcladas.slice(0,10);



// Mezclar alternativas

seleccionadas.forEach(pregunta=>{


let correcta = pregunta.respuesta;



pregunta.opciones.sort(()=>Math.random()-0.5);



pregunta.respuesta = pregunta.opciones.indexOf(correcta);



});



return seleccionadas;


}


// Crear preguntas para el juego

const preguntas = obtenerPreguntasAleatorias();