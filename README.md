# 📋 Users Filter App

Piccola applicazione JavaScript che recupera una lista di utenti da un'API e permette di filtrare i risultati tramite una barra di ricerca e un selettore.

## 🚀 Funzionalità

* Recupero dati tramite **Fetch API**
* Gestione asincrona con **async / await**
* **Loading spinner** durante il caricamento dei dati
* Filtro dinamico per:

  * Nome
  * Username
  * Email
* Gestione errori con **try / catch / finally**
* Manipolazione dinamica del **DOM**

## 🛠️ Tecnologie utilizzate

* HTML5
* CSS3 / Bootstrap
* JavaScript (Vanilla JS)
* Fetch API

## 🔎 Come funziona

1. L'app effettua una richiesta all'API:

```
https://jsonplaceholder.typicode.com/users
```

2. Gli utenti vengono salvati in una variabile globale.

3. I dati vengono mostrati nella tabella tramite la funzione `renderUsers()`.

4. L'input di ricerca permette di filtrare i risultati usando:

```
user[filterType]
```

in base alla proprietà selezionata.

## ⚙️ Miglioramenti implementati

* Spinner di caricamento durante la fetch
* Gestione degli errori nel recupero dei dati
* Filtro dinamico degli utenti
* Codice organizzato in funzioni riutilizzabili

## 📚 Obiettivo del progetto

Questo esercizio è stato realizzato per praticare:

* Fetch API
* Async / Await
* Manipolazione del DOM
* Filtraggio di array con `.filter()`
* Gestione degli stati di caricamento

---

👨‍💻 Progetto realizzato durante il percorso di studio JavaScript.
