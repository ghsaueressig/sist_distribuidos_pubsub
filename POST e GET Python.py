import requests

# URL da sua Realtime Database do Firebase
database_url = "https://seu-projeto.firebaseio.com/mensagens.json"

# Realiza um POST da mensagem
mensagem = "Enviando requisição para usuário n° 001."
data = {"mensagem": mensagem}
response = requests.post(database_url, json=data)

if response.status_code == 200:
    print("Mensagem enviada com sucesso!")
else:
    print(f"Falha ao enviar mensagem. Código de status: {response.status_code}")

# Realiza um GET para buscar informações baseadas na mensagem
response = requests.get(database_url)

if response.status_code == 200:
    data = response.json()
    for key, value in data.items():
        if value["mensagem"] == mensagem:
            print(f"Encontrado em {key}: {value}")
else:
    print(f"Falha ao buscar informações. Código de status: {response.status_code}")
