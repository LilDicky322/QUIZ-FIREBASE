// ======================================
// CONEXIÓN FIREBASE
// ======================================


import { initializeApp }

from

"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";



import { getFirestore }

from

"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";



import { firebaseConfig }

from

"../firebase/config.js";




// Inicializar aplicación


const app = initializeApp(firebaseConfig);



// Crear conexión Firestore


const db = getFirestore(app);




export { db };