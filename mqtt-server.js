const mqtt = require('mqtt');

// Configurações do cliente MQTT
const brokerUrl = 'mqtt://138.186.167.40:1883';
const clientName = 'Guilherme Henke Saueressig'; // Substitua 'SeuNome' pelo seu nome
const topic = 'aula';

// Cria um cliente MQTT
const client = mqtt.connect(brokerUrl, {
  clientId: clientName, // Define o nome do cliente
});

// Conecta-se ao servidor MQTT
client.on('connect', () => {
  console.log(`Conectado ao servidor MQTT em ${brokerUrl}`);

  // Publica a mensagem com seu nome no tópico 'aula'
  const message = `Presença registrada: ${clientName}`;
  client.publish(topic, message, (error) => {
    if (error) {
      console.error('Erro ao publicar mensagem:', error);
    } else {
      console.log(`Mensagem publicada no tópico ${topic}: ${message}`);
    }

    // Fecha a conexão após publicar a mensagem
    client.end();
  });
});

// Trata erros de conexão
client.on('error', (error) => {
  console.error('Erro de conexão:', error);
});

// Trata o evento de desconexão
client.on('close', () => {
  console.log('Cliente MQTT desconectado');
});
