// Configuración de Firebase (pon tu propia configuración aquí)
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    databaseURL: "TU_DATABASE_URL",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Función para enviar mensajes
function sendMessage() {
    let message = document.getElementById("message").value;
    if (message.trim() !== "") {
        database.ref("chat").push().set({
            message: message
        });
        document.getElementById("message").value = "";
    }
}

// Escucha nuevos mensajes
database.ref("chat").on("child_added", function(snapshot) {
    let chatBox = document.getElementById("chat-box");
    let msg = document.createElement("p");
    msg.textContent = snapshot.val().message;
    chatBox.appendChild(msg);
});
