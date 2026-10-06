// ======================================
// BANCO DE PREGUNTAS
// CONTROL GUBERNAMENTAL - OCI
// ======================================


const bancoPreguntas = [



{
pregunta:
"Una municipalidad está ejecutando una contratación. El OCI advierte una situación que podría afectar el proceso, pero la entidad todavía puede corregirla. ¿Cuál sería la actuación más coherente con el control?",


opciones:[

"Esperar el término para evaluar el resultado.",

"Determinar si existe responsabilidad administrativa.",

"Advertir la situación durante el proceso.",

"Disponer directamente cómo debe continuar."

],


respuesta:
"Advertir la situación durante el proceso."

},




{
pregunta:
"En una entidad se detecta una irregularidad después de haberse realizado una contratación. Sin embargo, el informe no determina automáticamente una sanción. ¿Cuál sería la interpretación más adecuada?",


opciones:[

"El control identifica hechos para su evaluación.",

"El informe reemplaza el procedimiento administrativo.",

"La irregularidad queda sancionada con el informe.",

"La entidad debe anular siempre la contratación."

],


respuesta:
"El control identifica hechos para su evaluación."

},




{
pregunta:
"En Kosñipata, el OCI había advertido anteriormente una situación relacionada con la contratación y, pese a ello, posteriormente se identificó nuevamente un hecho cuestionado. ¿Qué elemento genera mayor preocupación?",


opciones:[

"Que el contrato haya tenido una duración determinada.",

"Que el funcionario haya desempeñado otra función.",

"Que la contratación se haya realizado en otro momento.",

"Que una situación advertida vuelva a presentarse."

],


respuesta:
"Que una situación advertida vuelva a presentarse."

},




{
pregunta:
"Una entidad afirma que cumplió con sus objetivos institucionales y, por ello, considera que no existe un problema en la gestión. Sin embargo, el control observa un uso poco adecuado de los recursos. ¿Qué aspecto permite cuestionar esa conclusión?",


opciones:[

"El cumplimiento de las metas garantiza la eficiencia.",

"Alcanzar metas no excluye revisar el uso de recursos.",

"Los recursos no forman parte del control gubernamental.",

"La eficiencia solamente se revisa al finalizar el año."

],


respuesta:
"Alcanzar metas no excluye revisar el uso de recursos."

},




{
pregunta:
"Antes de formalizar una contratación, el área responsable no verifica adecuadamente si correspondía realizar un concurso público. Posteriormente, el OCI observa el contrato. ¿Qué pudo reducir principalmente ese riesgo?",


opciones:[

"Una revisión posterior del expediente.",

"Una recomendación después de firmado el contrato.",

"Una verificación previa de los requisitos.",

"Un seguimiento luego de concluida la contratación."

],


respuesta:
"Una verificación previa de los requisitos."

},




{
pregunta:
"Durante una actividad, el OCI comunica una situación que podría afectar el cumplimiento de los objetivos. La entidad responde que el órgano de control debería solucionar directamente el problema. ¿Qué sería lo más adecuado?",


opciones:[

"La entidad debe adoptar las medidas correspondientes.",

"El OCI debe asumir la gestión del proceso.",

"La Contraloría debe ejecutar la actividad observada.",

"El órgano de control debe reemplazar al responsable."

],


respuesta:
"La entidad debe adoptar las medidas correspondientes."

},




{
pregunta:
"Una contratación ya terminó y recién después se examinan los documentos, hechos y condiciones bajo los cuales se realizó. ¿Qué característica permite identificar el tipo de control?",


opciones:[

"Se busca anticipar un riesgo antes de actuar.",

"Se acompaña una actividad mientras está en curso.",

"Se advierte una situación antes de que produzca efectos.",

"Se examinan actuaciones que ya ocurrieron."

],


respuesta:
"Se examinan actuaciones que ya ocurrieron."

},




{
pregunta:
"Un informe señala una indicación de irregularidad y recomienda que, de corresponder, se realice el deslinde de responsabilidades. ¿Qué error debería evitarse al interpretar esa conclusión?",


opciones:[

"Considerar que el hecho requiere evaluación.",

"Reconocer que pueden existir responsabilidades.",

"Asumir que la responsabilidad ya fue determinada.",

"Considerar las recomendaciones formuladas."

],


respuesta:
"Asumir que la responsabilidad ya fue determinada."

},




{
pregunta:
"Imagina que en Kosñipata el OCI hubiera intervenido únicamente después de que se realizaran varias contrataciones cuestionadas. ¿Qué aspecto del control habría quedado más debilitado?",


opciones:[

"La evaluación de los hechos ocurridos.",

"La posibilidad de prevenir riesgos oportunamente.",

"La elaboración de recomendaciones posteriores.",

"La comunicación de los resultados obtenidos."

],


respuesta:
"La posibilidad de prevenir riesgos oportunamente."

},




{
pregunta:
"Una entidad sostiene que, como el OCI ya había emitido una advertencia, cualquier nueva contratación realizada posteriormente sería automáticamente responsabilidad del órgano de control. ¿Cuál sería la mejor respuesta?",


opciones:[

"Sí, porque el OCI debe garantizar que se cumpla la advertencia.",

"Sí, porque el OCI asume las decisiones después de observar.",

"No, porque las advertencias eliminan toda responsabilidad institucional.",

"No, porque la entidad mantiene sus funciones de gestión."

],


respuesta:
"No, porque la entidad mantiene sus funciones de gestión."

}


];





// ======================================
// SELECCIÓN ALEATORIA DE PREGUNTAS
// ======================================


function obtenerPreguntasAleatorias(){


let preguntasMezcladas = [...bancoPreguntas];



// Mezclar preguntas

preguntasMezcladas.sort(
()=>Math.random()-0.5
);



// Seleccionar 10

let seleccionadas = 
preguntasMezcladas.slice(0,10);




// Mezclar alternativas

seleccionadas.forEach(p=>{


let correcta = p.respuesta;



p.opciones.sort(
()=>Math.random()-0.5
);



// Actualizar posición correcta

p.respuesta = 
p.opciones.indexOf(correcta);



});



return seleccionadas;


}




const preguntas = obtenerPreguntasAleatorias();
