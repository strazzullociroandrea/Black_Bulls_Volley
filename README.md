<div style="text-align:center">
<h1 style=" text-align: center;">BLACK BULLS <span style="color:red">VOLLEY</span></h1>

<div style="width:100%; border:0.2px solid grey;"></div>
    <p> Un semplice sito vetrina per la ASD Club Black Bulls Volley di Cologno Monzese.
        Questo progetto gestisce la presenza online dell'associazione, offrendo informazioni su squadre, calendari e contatti.</p>
    <p>
    <a href="https://blackbullsvolley.it" target="_blank" style="cursor:pointer; color: #dc2626; font-weight: bold; text-decoration: none;">
      Visita https://blackbullsvolley.it/
    </a>
  </p>
</div>
<hr style="border: 0.5px solid #4b5563; margin: 30px 0;">

## Stack Tecnologico

* **Framework**: Astro.js
* **Linguaggi**: HTML, CSS, JavaScript, TypeScript
* **Styling**: Tailwind CSS, Shadcn UI
* **Hosting**: Cloudflare Pages

## Sviluppo locale

Per clonare il progetto e avviarlo sul tuo ambiente locale:

### 1. Prerequisiti

Assicurati di avere installato **Node.js** (v18 o superiore).

### 2. Clona il repository e installa i pacchetti

```bash
git clone [https://github.com/strazzullociroandrea/Black_Bulls_Volley](https://github.com/strazzullociroandrea/Black_Bulls_Volley)
cd Black_Bulls_Volley
npm install
npm run dev
```

Apri http://localhost:4321 nel tuo browser per vedere il sito in azione.


> Il progetto non necessita di alcuna variabile d'ambiente per funzionare.



## Struttura del progetto

Inside of your Astro project, you'll see the following folders and files:

```text
/Black_Bulls_Volley
├── public/
│   └── *.jpeg/*.png        # Immagini pubbliche utilizzate all'interno del sito
│   └── partner             # Loghi dei partner e sponsor
├── src
│   ├── assets
│   │   └── hero.jpeg       # Immagine per la sezione Hero
│   ├── components
│   │   └── *.astro/*.tsx   # Componenti personalizzati
│   │   └── ui/*.tsx        # Componenti UI (es. Button, Card, ecc.) Shadcn UI
│   ├── layouts
│   │   └── Layout.astro    # Layout base per le pagine del sito
│   └── lib
│       └── utils.ts        # Funzioni di utilità per il progetto (es. cn, ecc.)
│   └── pages
│       └── *.astro         # Pagine del sito (es. index.astro, about.astro, ecc.)
│   └── styles
│       └── global.css      # Stili globali del sito
```
 

## Comandi utili
  

| Command                   | Action                                                  |
|:--------------------------|:--------------------------------------------------------|
| `npm install`             | Installazione delle dipendenze del progetto             |
| `npm run dev`             | Avvio del server locale`localhost:4321`                 |
| `npm run build`           | Avvio della build per la produzione del sito `./dist/`  |
| `npm run preview`         | Preview del sito, localmente, prima della pubblicazione |
| `npm run astro -- --help` | Ottieni aiuto sui comandi                               |
 

<hr style="border: 0.5px solid #4b5563; margin: 30px 0;">

<p style=" text-align: center;"> Sito sviluppato da <a style="color:red" href="https://cirostrazzullo.it">cirostrazzullo</a>.</p>
<p style=" text-align: center;color: #6b7280;"><i> Tutti i diritti riservati. Vietato l'utilizzo di dati, testi, foto o loghi senza autorizzazione scritta della ASD. Vietata la duplicazione del sito web per qualsiasi scopo.</i></p>

