CANTIERE PRO v3.2
================================
Novità:
- visualizzazione PDF multipagina con PDF.js
- Apple Pencil / touch per annotazioni
- penna
- evidenziatore
- frecce
- cerchi
- testo
- gomma
- annulla/ripristina
- salvataggio di una vera nuova revisione PDF tramite pdf-lib
- numerazione automatica REV01, REV02, REV03...
- originale non sovrascritto
- esportazione della revisione come PDF
- File/iCloud Drive tramite il selettore ufficiale di iPadOS/iOS
- note, foto, problemi, backup

INSTALLAZIONE:
1. Carica tutti i file nel repository GitHub Pages.
2. Settings > Pages > Deploy from branch > main > root.
3. Apri l'URL con Safari su iPad/iPhone.
4. Condividi > Aggiungi alla schermata Home > Apri come app web.

USO PDF:
+ Disegno -> File -> iCloud Drive -> scegli PDF.
Apri il disegno -> annota con Apple Pencil -> Salva REVISIONE.
La nuova revisione viene generata come vero PDF e scaricata/esportata con nome:
NOME_ORIGINALE_REV01.pdf
poi REV02, REV03...

NOTA ICLOUD:
Una PWA non può scrivere silenziosamente e in modo permanente dentro una cartella iCloud Drive specifica.
Perciò iPadOS usa il proprio flusso “Salva su File”, che permette di scegliere iCloud Drive.


v3.5: fix eliminazione revisioni (funzione esposta alla UI) e aggiornamento Service Worker/cache.
