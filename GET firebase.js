var firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "seu-projeto.firebaseapp.com",
  databaseURL: "https://teste-sd2023-default-rtdb.firebaseio.com/",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Referência à Realtime Database
var database = firebase.database();

// Mensagem a ser pesquisada
var mensagem = "Enviando requisição para usuário n° 001.";

// Realiza o GET com base na mensagem
database.ref('mensagens').orderByChild('mensagem').equalTo(mensagem).once('value')
  .then(function(snapshot) {
    if (snapshot.exists()) {
      console.log("Mensagem encontrada:", snapshot.val());
    } else {
      console.log("Mensagem não encontrada.");
    }
  })
  .catch(function(error) {
    console.error("Erro ao buscar mensagem:", error);
  });
