import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase, ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

//cole aqui seu SDK
const firebaseConfig = {
    apiKey: "AIzaSyDaECV1hUPXM8IxkY5dY153eyNcJFmv76Q",
    authDomain: "votacaosite-db29b.firebaseapp.com",
    databaseURL: "https://votacaosite-db29b-default-rtdb.firebaseio.com",
    projectId: "votacaosite-db29b",
    storageBucket: "votacaosite-db29b.firebasestorage.app",
    messagingSenderId: "144073471347",
    appId: "1:144073471347:web:67baf0d6aea77dd76e8106"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);




// LOGIN usando o Firebase Authentication.
const formularioLogin = document.getElementById("form-login");
if (formularioLogin) {
    formularioLogin.addEventListener("submit", async (evento) => {
        evento.preventDefault();
        const mensagem = document.getElementById("mensagem");
        const email = document.getElementById("input-email").value.trim();
        const senha = document.getElementById("input-senha").value;
        try {
            await signInWithEmailAndPassword(auth, email, senha);
            window.location.href = "index.html";
        } catch (erro) {
            mostrarErro(erro, mensagem);
        }
    });
}


