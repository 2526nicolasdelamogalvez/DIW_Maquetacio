# Restaurant Els Coberts

## Activitat Multimèdia - RA4

---

## Transicions

**Exercici 1.1 - Transició galeria**
- Fitxer: `Styles/Style.css`
- Selector: `.galeria-container div img:hover`
- Propietats: `transform: scale(1.5) rotate(3deg)` i `filter: grayscale(100%)`
- L'overflow està controlat amb `overflow: hidden` al `.galeria-container div`

**Exercici 1.2 - Transició lliure (ítems del menú de navegació)**
- Fitxer: `Styles/Style.css`
- Selector: `.menu-item:hover`
- Propietats: `transform: scale(0.5)`, `transform: rotate(2deg)` i `filter: grayscale(100%)`

---

## Animacions

**Exercici 2.1 - Animació text capçalera**
- Fitxer: `Styles/Style.css`
- Keyframes: `@keyframes apareix`
- Aplicat a: `.paragrafcentrat`
- El text apareix de transparent a visible, puja de baix cap amunt i canvia de taronja a blanc
- Durada: 10s — es queda en l'estat final amb `animation-fill-mode: forwards`

**Exercici 2.2 - Animació botó de reserva**
- Fitxer: `Styles/Style.css`
- Keyframes: `@keyframes botoApareix`
- Aplicat a: `.chatbot`
- El botó apareix pujant des de baix amb `opacity` i `translateY`
- Durada: 5s — es queda en l'estat final amb `animation-fill-mode: forwards`

---

## Vídeo

**Exercici 3 - Vídeo HTML**
- Fitxer: `index.html`
- Secció: `#videos`
- El vídeo és responsive (`width: 100%`), silenciat i parat per defecte

**Exercici 4 - Controls personalitzats**
- Fitxer: `index.html` i `Styles/Style.css`
- Controls dins de `.controlvideo`: play, pause, volum, silenci
- Hover amb `box-shadow` sobre les icones SVG

---

## JavaScript

**Exercici 5**
- Fitxer: `scripts/script.js`
- El menú de navegació canvia de mida i color en fer scroll
- El vídeo es reprodueix automàticament quan s'arriba a la secció `#videos`
