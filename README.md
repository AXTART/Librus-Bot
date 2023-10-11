# Librus Bot

Discordowy bot mogący wysłać ogłoszenia, wydarzenia i szczęśliwy numerek.

## Instalacja

Zainstalu projek z GitHuba:

```bash
  git clone https://github.com/AXTART/Librus-Bot.git
```
Pobierz odpowiednie bibloteki:
```bash
  npm install --locked
```

## Konfiguracja

Odpowiednio wypełnij luki w pliku `config.json`
```bash
    "clientId": "Bot Id",
    "guildId": "Server Id",
    "token":"Bot Token",
    "LibrusLogin":"Librus Login",
    "LibrusPassword":"Librus Password"
```
Dodaj komendy do serwera discord:
```bash
    node deploy-commands.js
```
## Uruchomienie
Uruchom program komędą w terminalu:

```bash
  npm start
```


## Użytkowanie


Librusowe komendy:
```
/ogłoszenia - wyswietla ostatnie ogłoszenie
```
```
/wydarzenia - wyswietla ostatnie wydarzenie w terminarzu
```
```
/szczęśliwy-numerek - wyświetla szczęśliwy numerek
```

## Twórca

-👤 [AXTART](https://www.github.com/octokatherine)

