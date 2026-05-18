# 🍽️ Restaurant Els Coberts — Pràctica Multimèdia
 
Projecte web per al mòdul de **Disseny d'Interfícies Web** (RA4).  
Pàgina del restaurant fictici *Els Coberts*, amb transicions CSS, animacions, vídeo interactiu i scroll actiu amb JavaScript.
 
---
 
## 📁 Estructura del projecte
 
```
/
├── index.html              # Pàgina principal
├── confirmacio.html        # Pàgina de confirmació de reserva
├── Styles/
│   └── Style.css           # Full d'estils principal
├── scripts/
│   └── script.js           # JavaScript: controls de vídeo i scroll
├── Media/                  # Imatges i vídeo del projecte
└── assets/
    └── Favicon/
        └── favicon.ico
```
 
---
 
## ✅ Exercicis implementats
 
### Exercici 1 — Transicions CSS
 
#### 1.1 Transició a la galeria d'imatges
**Ubicació CSS:** `.galeria-container div img` i `.galeria-container div img:hover`
 
Quan es passa el ratolí per sobre de qualsevol imatge de la galeria s'aplica una transició de 0.5 s que utilitza:
- `transform: scale(1.5)` — zoom sobre la imatge
- `transform: rotate(7deg)` — lleugera rotació
- `filter: grayscale(100%)` — la imatge passa a escala de grisos
L'`overflow: hidden` al contenidor pare impedeix que la imatge ampliada surti fora del seu marc.
 
#### 1.2 Transició lliure — Ítems del menú de navegació
**Ubicació CSS:** `.menu-item` i `.menu-item:hover`
 
Al fer hover sobre qualsevol ítem del menú de navegació superior s'aplica:
- `transform: scale(0.5)` — reducció de mida
- `transform: rotate(2deg)` — lleugera rotació
- `filter: grayscale(100%)` — efecte escala de grisos
---
 
### Exercici 2 — Animacions CSS
 
#### 2.1 Animació del text inicial (capçalera slider)
**Ubicació CSS:** `@keyframes apareix` i `.paragrafcentrat`
 
En carregar la pàgina per primera vegada, el text de la capçalera (títol i subtítol) apareix amb l'animació `apareix` (durada 10 s, `animation-fill-mode: forwards`):
 
| Frame | Estat |
|-------|-------|
| 0 %   | Invisible (`opacity: 0`), posició baixa (`top: 750px`), fons taronja |
| 33 %  | Semi-visible (`opacity: 0.5`), puja a `top: 680px`, fons taronja |
| 66 %  | Quasi visible (`opacity: 0.8`), puja a `top: 600px`, fons taronja semitransparent |
| 100 % | Totalment visible (`opacity: 1`), posició final `top: 550px`, fons blanc |
 
#### 2.2 Animació lliure — Botó flotant de reserva
**Ubicació CSS:** `@keyframes botoApareix` i `.chatbot`
 
El botó fix de reserva apareix amb un efecte d'entrada des de baix (durada 5 s, `animation-fill-mode: forwards`):
- `opacity: 0 → 1`
- `transform: translateY(100px) → translateY(0)`
---
 
### Exercici 3 — Vídeo HTML
 
**Ubicació HTML:** `<section id="videos">`
 
S'ha afegit un apartat de vídeo després de la galeria de fotos amb les característiques:
- Vídeo centrat i **responsive** (`width: 100%`)
- Per defecte: **aturat** i **silenciat** (`muted`)
- No surt mai scroll horitzontal
---
 
### Exercici 4 — Controls de vídeo personalitzats
 
**Ubicació HTML:** `<div class="controlvideo">` dins la secció `#videos`  
**Ubicació CSS:** `.controlvideo`, `.controlvideo svg`, `.controlvideo svg:hover`  
**Ubicació JS:** `script.js` (funcions dels botons)
 
Els controls per defecte del navegador estan ocults. S'han creat controls propis amb icones SVG de Google Material Symbols:
 
| Icona | ID | Funció |
|-------|----|--------|
| ▶ Play Circle | `btnPlay` | Reprodueix el vídeo |
| ⏸ Pause Circle | `btnPause` | Pausa el vídeo |
| 🔊 Volume Up | `volumeUp` | Activa el so (`muted = false`) |
| 🔇 Volume Off | `volumeOff` | Silencia el vídeo (`muted = true`) |
 
Els controls estan posicionats dins del vídeo amb fons fosc semitransparent (`rgba(0,0,0,0.5)`). En passar el ratolí per sobre de cada icona s'aplica un `box-shadow` blanc per destacar-la.
 
---
 
### Exercici 5 — JavaScript amb Scroll
 
**Ubicació JS:** `script.js` — funcions `manageScroll()` i `playVideo()`
 
#### 5.1 Animació del menú amb scroll
Quan l'usuari fa scroll de més de 80 px, el menú de navegació es redueix (`padding: 5px 10px`) i canvia de color (de `brown` a `red`). En tornar a la part superior, recupera l'estat inicial. La transició CSS `transition: all 0.4s ease` suavitza el canvi.
 
#### 5.2 Reproducció automàtica del vídeo amb scroll
Quan l'usuari arriba (scroll > 3457 px) a la secció del vídeo, el vídeo es reprodueix automàticament. Si s'allunya de la secció, el vídeo es pausa.
 
---
 
## 📱 Responsive Design (Media Queries)
 
| Breakpoint | Canvis principals |
|------------|-------------------|
| `≤ 768px`  | Menú centrat, secció "Sobre nosaltres" en columna, grid del menú adaptat, botó de formulari ample complet |
| `≤ 576px`  | Menú en columna, text del slider ocult, galeria en una columna, secció menú en una columna |
 
---
 
## 🌿 Branca de treball
 
Tots els canvis d'aquesta pràctica s'han desenvolupat a la branca **`multimedia`**.
 
---
 
## 👤 Autor
 
Nicolás Del Amo Gálvez — 2526  
[2526_nicolas.delamo@iticbcn.cat](mailto:2526_nicolas.delamo@iticbcn.cat)
