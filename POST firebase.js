// Supondo que você já configurou o Firebase e tem a instância do Firebase inicializada.
var firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "seu-projeto.firebaseapp.com",
    databaseURL: "https://teste-sd2023-default-rtdb.firebaseio.com/",
    projectId: "seu-projeto",
    storageBucket: "seu-projeto.appspot.com",
    messagingSenderId: "SEU_SENDER_ID",
    appId: "SEU_APP_ID"
  };

// Referência à Realtime Database
var database = firebase.database();

// Mensagem a ser enviada
var mensagem = "Enviando requisição para usuário n° 001.";

// Define os dados a serem enviados
var data = {
  mensagem: mensagem
};

// Realiza o POST dos dados na Realtime Database
database.ref('mensagens').push(data, function(error) {
  if (error) {
    console.error("Falha ao enviar mensagem:", error);
  } else {
    console.log("Mensagem enviada com sucesso!");
  }
});
