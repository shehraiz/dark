function applycss(css){
  var head = document.getElementsByTagName('head')[0];
  var s = document.createElement('style');
  s.setAttribute('type', 'text/css');
  s.appendChild(document.createTextNode(css));
  head.appendChild(s);
}
applycss(`
:root {
  --dark: #1f232a;
  --darken: #252a33;
  --darker: #2c313a;
  --light: #e9e9e9;
  --lighter: #a1a1a1;
  --accent: #7289da;
  --yellow: #e5c512;
  --orange: #df4b16;
  --red: #dc322f;
  --magenta: #f33682;
  --violet: #6c71c4;
  --blue: #268bd2;
  --cyan: #2aa198;
  --green: #859900;
  --white: #fff;
  --radius: 4px;
  --t: transparent;
  --shadow: rgba(0,0,0,0.145);
  --sh-h: rgba(0,0,0,0.208);
  --bshadow: 0 2px 4px var(--shadow);
  --app-width: 1396px;
  --emoji-o: 0.8;
  --avatar-r: 50%;
  --bg-image: url("https://images.unsplash.com/photo-1434569117012-ce134ee1a088?fit=crop&w=1280&h=720&q=80");
  --bg-opacity: 0.4;
  --bg-blur: 12px;
  --bg-hue: 320deg;
  --bg-invert: 0;
  --chat-image: url("https://web.whatsapp.com/img/bg-chat-tile_9e8a2898faedb7db9bf5638405cf81ae.png");
  --chat-bg-o: 0.15;
  --chat-bg-i: 0.6;
  --c-m-hover: 1s;
  --ui-font: 'custom font', 'Segoe UI', 'Helvetica Neue', Helvetica, 'Lucida Grande', Arial, Ubuntu, Cantarell, 'Fira Sans', sans-serif;
  --subtext: 'Forked from vednoc/dark-whatsapp ';
  --title: 'darkWhatsApp for Rambox';
  --link: 'https://github.com/vednoc/dark-whatsapp';
}
@supports (-moz-user-select: none) {
  :root * {
    scrollbar-width: thin;
  }
}
body {
  color: var(--light) !important;
  background-color: var(--dark) !important;
  background-image: none;
  scrollbar-color: var(--accent) rgba(85,85,85,0.125);
}
body ::placeholder,
body ._2kE6F {
  color: var(--lighter) !important;
}
body strong,
body [contenteditable] {
  color: var(--light) !important;
}
body a {
  color: var(--accent);
}
body select {
  color: var(--light) !important;
  border-color: var(--darker) !important;
}
.Fzl83 {
  margin-right: 24px;
}
.Fzl83::before {
  color: var(--lighter) !important;
}
body option {
  color: var(--light) !important;
  background-color: var(--darker) !important;
}
body ::-moz-range-progress {
  background-color: var(--blue) !important;
}
body ::-moz-range-thumb {
  background-color: var(--accent) !important;
}
body ::-moz-range-track {
  background-color: var(--dark) !important;
}
body ._1N8Pv {
  background-color: var(--accent) !important;
}
body ::-webkit-progress-bar {
  background-color: var(--darker) !important;
}
body ::-webkit-progress-value {
  background-color: var(--accent) !important;
}
body ::-webkit-slider-runnable-track {
  background-color: var(--dark) !important;
}
body ::-webkit-slider-thumb {
  background-color: var(--accent) !important;
}
body ::-webkit-scrollbar-track {
  background-color: rgba(85,85,85,0.133);
}
body ::-webkit-scrollbar-thumb {
  background-color: var(--accent);
}
body,
body button,
body input {
  font-family: var(--ui-font);
}
body .landing-wrapper::before {
  background-color: var(--darken) !important;
}
body .landing-header {
  position: relative;
}
body .landing-header path[fill ^= '#FFF'] {
  fill: var(--accent);
}
body .landing-header path[fill ^= '#00E'] {
  fill: var(--dark);
}
body .landing-header div {
  text-transform: unset;
  color: var(--light) !important;
}
body .landing-header::after {
  right: 0;
  font-size: 14px;
  font-weight: 500;
  position: absolute;
}
body .landing-window:not(#z) {
  border-radius: var(--radius);
  background-color: var(--dark) !important;
  box-shadow: inset 0 0 0 1px var(--darker), var(--bshadow);
}
body .landing-main a[href] {
  color: var(--accent) !important;
}
body .landing-main label,
body .landing-main ._2yUXW {
  color: var(--lighter) !important;
}
body .landing-main .landing-title {
  color: var(--light) !important;
}
body .landing-main rect[fill ^= '#f2f'],
body .landing-main rect[fill ^= '#F2F'] {
  fill: var(--darker);
}
body .landing-main path[fill ^= '#818'] {
  fill: var(--accent);
}
body .landing-main div[data-ref] {
  border-radius: 0;
  filter: contrast(150%);
  outline: 4px solid var(--white);
  box-shadow: 0 0 0 4px var(--white);
}
body .landing-main div[data-ref] [role='button'] {
  color: var(--white) !important;
  background-color: var(--accent) !important;
}
body .landing-main div[data-ref]._3aqLw {
  outline: 4px solid var(--accent);
  box-shadow: 0 0 0 4px var(--accent);
}
body .landing-main + ._3vndg {
  background-color: var(--t) !important;
}
body .landing-main + ._3vndg img {
  opacity: 0.3;
}
body .landing-main + ._3vndg [style *= 'opacity: 1'] {
  background-color: var(--t) !important;
}
body .landing-main ._2-fMQ {
  color: var(--white) !important;
  background-color: var(--accent) !important;
  box-shadow: var(--bshadow);
}
body .landing-main ._2-fMQ::before {
  border-bottom-color: var(--accent);
}
body [id *= 'startup'] {
  background-color: var(--dark) !important;
}
body [id *= 'startup'] progress {
  color: var(--accent) !important;
  background-color: var(--darker) !important;
}
body [id *= 'startup'] ::-moz-progress-bar {
  background-color: var(--accent) !important;
}
body [id *= 'startup'] circle {
  stroke: var(--light);
}
body ._3pkG4 {
  color: var(--light) !important;
  background-color: var(--darken) !important;
  box-shadow: inset 0 0 0 1px var(--darker), var(--bshadow);
}
body ._3pkG4 button {
  color: var(--accent) !important;
}
body ._2WwbV,
body .FPZFa {
  color: var(--accent) !important;
  border-color: var(--accent) !important;
  background-color: var(--darken) !important;
}
body ._1qNwV {
  border-color: var(--darker) !important;
  background-color: var(--dark) !important;
}
body ._1qNwV a {
  color: var(--accent);
}
body ._1qNwV::after {
  border-color: var(--accent) !important;
}
body ._1qNwV [style] h1 {
  color: var(--light) !important;
}
body ._1qNwV [style] div {
  color: var(--lighter) !important;
}
body ._1qNwV [data-asset-intro-image] {
  border-radius: 50%;
  max-width: 200px;
  max-height: 200px;
  filter: opacity(0.75);
  transition: opacity 0.6s ease;
}
body ._1qNwV h1 + div[class] {
  font-size: 0;
}
body ._1qNwV h1 + div[class]::before {
  display: block;
  font-size: 16px;
  margin-bottom: -16px;
  content: var(--title);
}
body ._1qNwV h1 + div[class]::after {
  display: block;
  font-size: 16px;
  margin-top: 16px;
  padding-top: 16px;
  content: var(--version);
  border-top: 1px solid var(--darker);
}
body ._1qNwV ._3ZVgT {
  background-color: var(--darker) !important;
}
body .IMBOA {
  margin-top: 16px !important;
}
body ._2a2hS {
  background-color: var(--darker) !important;
}
body span[title *= 'typing...'],
body ._2ZAIy {
  color: var(--accent) !important;
}
.matched-text:not(#z) {
  color: var(--accent) !important;
}
.matched-mention span,
[data-mention-jid] span {
  color: var(--accent) !important;
}
.matched-mention:hover span,
[data-mention-jid]:hover span {
  text-decoration: underline !important;
}
body ._1Zo-R {
  border-color: var(--lighter) !important;
  background-color: var(--darken) !important;
}
body ._15wNI {
  border-color: var(--accent) !important;
  background-color: var(--accent) !important;
}
body ._3j8Pd path:not([fill = '#009588']) {
  fill-opacity: 0.55;
}
body ._3j8Pd.GPmgF,
body ._3j8Pd.GPmgf {
  background-color: var(--darker) !important;
}
body ._3j8Pd.GPmgF [data-icon] path,
body ._3j8Pd.GPmgf [data-icon] path {
  fill-opacity: 1 !important;
}
body ._10YBz,
body ._3UAb1 {
  color: var(--light) !important;
  background-color: var(--dark) !important;
  opacity: 0.75;
  box-shadow: var(--bshadow);
}
body ._10YBz svg path,
body ._3UAb1 svg path {
  fill: var(--light) !important;
}
body svg[width = '18'][height = '18'] circle,
body svg[width = '20'][height = '20'] circle {
  stroke: var(--green);
}
body svg[width = '34'][height = '34'] circle {
  stroke: var(--lighter);
}
body ._1JS2G {
  color: var(--light) !important;
  background-color: rgba(25,25,25,0.502) !important;
  border-radius: 0 !important;
}
body #group-invite-link-anchor {
  color: var(--accent) !important;
}
.OZVc4 ._3N5w5::-webkit-slider-runnable-track {
  background-color: var(--t) !important;
}
.OZVc4 ._3N5w5::-moz-range-progress,
.OZVc4 ._3N5w5::-moz-range-track {
  background-color: var(--t) !important;
}
.OZVc4 ._2bTRm ._2ZXtj {
  background-color: var(--accent) !important;
}
._3Nf6W {
  background-color: var(--t) !important;
}
._3Nf6W + ::-moz-range-progress,
._3Nf6W + ::-moz-range-thumb {
  background-color: var(--accent) !important;
}
._3Nf6W + ::-moz-range-track {
  height: 2px;
  background-color: #808080 !important;
}
._1p-0O {
  box-shadow: 0 4px 12px 2px var(--sh-h) !important;
}
#app > div::after {
  top: calc(-2 * var(--bg-blur));
  right: calc(-2 * var(--bg-blur));
  bottom: calc(-2 * var(--bg-blur));
  left: calc(-2 * var(--bg-blur));
  height: unset;
  width: unset;
  filter: blur(var(--bg-blur)) opacity(var(--bg-opacity)) invert(var(--bg-invert)) hue-rotate(var(--bg-hue));
  background-image: var(--bg-image);
  background-size: cover;
  background-color: var(--darken) !important;
}
#app > div .app {
  background-color: var(--dark) !important;
  background-image: none;
}
@media (min-width: 1441px) {
  #app > div .app {
    border: 1px solid var(--darker);
    border-radius: var(--radius);
    box-shadow: var(--bshadow);
  }
  #app > div .app,
  ._11ARv {
    width: calc(100% - 38px);
    max-width: var(--app-width);
  }
}
#app > div .app.three > ._37f_5 {
  width: calc(100% + 1px);
}
#app > div .app ._2rI9W {
  margin-right: -1px;
}
._3BYwr,
._3RWII,
._3p0T6,
._1i7uJ {
  border-radius: var(--avatar-r) !important;
  background-color: var(--dark) !important;
}
._3BYwr > img,
._3RWII > img,
._3p0T6 > img,
._1i7uJ > img {
  border-radius: var(--avatar-r) !important;
}
.emojik {
  transition: transform 0.15s ease;
}
.emojik:not(:hover):not(:focus):not(.selected) {
  filter: opacity(var(--emoji-o));
}
.emojik:hover,
.emojik:focus,
.emojik.selected {
  opacity: 1;
  transform: scale(1.2);
  box-shadow: none !important;
}
.emojik.wa.b0 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/0.webp");
}
.emojik.wa.b1 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/1.webp");
}
.emojik.wa.b2 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/2.webp");
}
.emojik.wa.b3 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/3.webp");
}
.emojik.wa.b4 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/4.webp");
}
.emojik.wa.b5 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/5.webp");
}
.emojik.wa.b6 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/6.webp");
}
.emojik.wa.b7 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/7.webp");
}
.emojik.wa.b8 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/8.webp");
}
.emojik.wa.b9 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/9.webp");
}
.emojik.wa.b10 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/10.webp");
}
.emojik.wa.b11 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/11.webp");
}
.emojik.wa.b12 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/12.webp");
}
.emojik.wa.b13 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/13.webp");
}
.emojik.wa.b14 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/14.webp");
}
.emojik.wa.b15 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/15.webp");
}
.emojik.wa.b16 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/16.webp");
}
.emojik.wa.b17 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/17.webp");
}
.emojik.wa.b18 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/18.webp");
}
.emojik.wa.b19 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/19.webp");
}
.emojik.wa.b20 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/20.webp");
}
.emojik.wa.b21 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/21.webp");
}
.emojik.wa.b22 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/22.webp");
}
.emojik.wa.b23 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/23.webp");
}
.emojik.wa.b24 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/24.webp");
}
.emojik.wa.b25 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/25.webp");
}
.emojik.wa.b26 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/26.webp");
}
.emojik.wa.b27 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/27.webp");
}
.emojik.wa.b28 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/28.webp");
}
.emojik.wa.b29 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/29.webp");
}
.emojik.wa.b30 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/30.webp");
}
.emojik.wa.b31 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/31.webp");
}
.emojik.wa.b32 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/32.webp");
}
.emojik.wa.b33 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/33.webp");
}
.emojik.wa.b34 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/34.webp");
}
.emojik.wa.b35 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/35.webp");
}
.emojik.wa.b36 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/36.webp");
}
.emojik.wa.b37 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/37.webp");
}
.emojik.wa.b38 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/38.webp");
}
.emojik.wa.b39 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/39.webp");
}
.emojik.wa.b40 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/40.webp");
}
.emojik.wa.b41 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/41.webp");
}
.emojik.wa.b42 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/42.webp");
}
.emojik.wa.b43 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/43.webp");
}
.emojik.wa.b44 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/44.webp");
}
.emojik.wa.b45 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/45.webp");
}
.emojik.wa.b46 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/46.webp");
}
.emojik.wa.b47 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/47.webp");
}
.emojik.wa.b48 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/48.webp");
}
.emojik.wa.b49 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/49.webp");
}
.emojik.wa.b50 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/50.webp");
}
.emojik.wa.b51 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/51.webp");
}
.emojik.wa.b52 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/52.webp");
}
.emojik.wa.b53 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/53.webp");
}
.emojik.wa.b54 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/54.webp");
}
.emojik.wa.b55 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/55.webp");
}
.emojik.wa.b56 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/56.webp");
}
.emojik.wa.b57 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/57.webp");
}
.emojik.wa.b58 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/58.webp");
}
.emojik.wa.b59 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/59.webp");
}
.emojik.wa.b60 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/60.webp");
}
.emojik.wa.b61 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/61.webp");
}
.emojik.wa.b62 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/62.webp");
}
.emojik.wa.b63 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/63.webp");
}
.emojik.wa.b64 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/64.webp");
}
.emojik.wa.b65 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/65.webp");
}
.emojik.wa.b66 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/66.webp");
}
.emojik.wa.b67 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/67.webp");
}
.emojik.wa.b68 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/68.webp");
}
.emojik.wa.b69 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/69.webp");
}
.emojik.wa.b70 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/70.webp");
}
.emojik.wa.b71 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/71.webp");
}
.emojik.wa.b72 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/72.webp");
}
.emojik.wa.b73 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/73.webp");
}
.emojik.wa.b74 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/74.webp");
}
.emojik.wa.b75 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/75.webp");
}
.emojik.wa.b76 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/76.webp");
}
.emojik.wa.b77 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/77.webp");
}
.emojik.wa.b78 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/78.webp");
}
.emojik.wa.b79 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/79.webp");
}
.emojik.wa.b80 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/80.webp");
}
.emojik.wa.b81 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/81.webp");
}
.emojik.wa.b82 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/82.webp");
}
.emojik.wa.b83 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/83.webp");
}
.emojik.wa.b84 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/84.webp");
}
.emojik.wa.b85 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/85.webp");
}
.emojik.wa.b86 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/86.webp");
}
.emojik.wa.b87 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/87.webp");
}
.emojik.wa.b88 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/88.webp");
}
.emojik.wa.b89 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/89.webp");
}
.emojik.wa.b90 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/90.webp");
}
.emojik.wa.b91 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/91.webp");
}
.emojik.wa.b92 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/92.webp");
}
.emojik.wa.b93 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/93.webp");
}
.emojik.wa.b94 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/94.webp");
}
.emojik.wa.b95 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/95.webp");
}
.emojik.wa.b96 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/96.webp");
}
.emojik.wa.b97 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/97.webp");
}
.emojik.wa.b98 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/98.webp");
}
.emojik.wa.b99 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/99.webp");
}
.emojik.wa.b100 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/100.webp");
}
.emojik.wa.b101 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/101.webp");
}
.emojik.wa.b102 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/102.webp");
}
.emojik.wa.b103 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/103.webp");
}
.emojik.wa.b104 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/104.webp");
}
.emojik.wa.b105 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/105.webp");
}
.emojik.wa.b106 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/106.webp");
}
.emojik.wa.b107 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/107.webp");
}
.emojik.wa.b108 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/108.webp");
}
.emojik.wa.b109 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/109.webp");
}
.emojik.wa.b110 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/110.webp");
}
.emojik.wa.b111 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/111.webp");
}
.emojik.wa.b112 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/a/112.webp");
}
.emojik.apple.b0 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/0.webp");
}
.emojik.apple.b1 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/1.webp");
}
.emojik.apple.b2 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/2.webp");
}
.emojik.apple.b3 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/3.webp");
}
.emojik.apple.b4 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/4.webp");
}
.emojik.apple.b5 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/5.webp");
}
.emojik.apple.b6 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/6.webp");
}
.emojik.apple.b7 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/7.webp");
}
.emojik.apple.b8 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/8.webp");
}
.emojik.apple.b9 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/9.webp");
}
.emojik.apple.b10 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/10.webp");
}
.emojik.apple.b11 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/11.webp");
}
.emojik.apple.b12 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/12.webp");
}
.emojik.apple.b13 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/13.webp");
}
.emojik.apple.b14 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/14.webp");
}
.emojik.apple.b15 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/15.webp");
}
.emojik.apple.b16 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/16.webp");
}
.emojik.apple.b17 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/17.webp");
}
.emojik.apple.b18 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/18.webp");
}
.emojik.apple.b19 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/19.webp");
}
.emojik.apple.b20 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/20.webp");
}
.emojik.apple.b21 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/21.webp");
}
.emojik.apple.b22 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/22.webp");
}
.emojik.apple.b23 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/23.webp");
}
.emojik.apple.b24 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/24.webp");
}
.emojik.apple.b25 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/25.webp");
}
.emojik.apple.b26 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/26.webp");
}
.emojik.apple.b27 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/27.webp");
}
.emojik.apple.b28 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/28.webp");
}
.emojik.apple.b29 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/29.webp");
}
.emojik.apple.b30 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/30.webp");
}
.emojik.apple.b31 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/31.webp");
}
.emojik.apple.b32 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/32.webp");
}
.emojik.apple.b33 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/33.webp");
}
.emojik.apple.b34 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/34.webp");
}
.emojik.apple.b35 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/35.webp");
}
.emojik.apple.b36 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/36.webp");
}
.emojik.apple.b37 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/37.webp");
}
.emojik.apple.b38 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/38.webp");
}
.emojik.apple.b39 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/39.webp");
}
.emojik.apple.b40 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/40.webp");
}
.emojik.apple.b41 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/41.webp");
}
.emojik.apple.b42 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/42.webp");
}
.emojik.apple.b43 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/43.webp");
}
.emojik.apple.b44 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/44.webp");
}
.emojik.apple.b45 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/45.webp");
}
.emojik.apple.b46 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/46.webp");
}
.emojik.apple.b47 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/47.webp");
}
.emojik.apple.b48 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/48.webp");
}
.emojik.apple.b49 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/49.webp");
}
.emojik.apple.b50 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/50.webp");
}
.emojik.apple.b51 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/51.webp");
}
.emojik.apple.b52 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/52.webp");
}
.emojik.apple.b53 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/53.webp");
}
.emojik.apple.b54 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/54.webp");
}
.emojik.apple.b55 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/55.webp");
}
.emojik.apple.b56 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/56.webp");
}
.emojik.apple.b57 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/57.webp");
}
.emojik.apple.b58 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/58.webp");
}
.emojik.apple.b59 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/59.webp");
}
.emojik.apple.b60 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/60.webp");
}
.emojik.apple.b61 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/61.webp");
}
.emojik.apple.b62 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/62.webp");
}
.emojik.apple.b63 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/63.webp");
}
.emojik.apple.b64 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/64.webp");
}
.emojik.apple.b65 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/65.webp");
}
.emojik.apple.b66 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/66.webp");
}
.emojik.apple.b67 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/67.webp");
}
.emojik.apple.b68 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/68.webp");
}
.emojik.apple.b69 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/69.webp");
}
.emojik.apple.b70 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/70.webp");
}
.emojik.apple.b71 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/71.webp");
}
.emojik.apple.b72 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/72.webp");
}
.emojik.apple.b73 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/73.webp");
}
.emojik.apple.b74 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/74.webp");
}
.emojik.apple.b75 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/75.webp");
}
.emojik.apple.b76 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/76.webp");
}
.emojik.apple.b77 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/77.webp");
}
.emojik.apple.b78 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/78.webp");
}
.emojik.apple.b79 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/79.webp");
}
.emojik.apple.b80 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/80.webp");
}
.emojik.apple.b81 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/81.webp");
}
.emojik.apple.b82 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/82.webp");
}
.emojik.apple.b83 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/83.webp");
}
.emojik.apple.b84 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/84.webp");
}
.emojik.apple.b85 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/85.webp");
}
.emojik.apple.b86 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/86.webp");
}
.emojik.apple.b87 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/87.webp");
}
.emojik.apple.b88 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/88.webp");
}
.emojik.apple.b89 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/89.webp");
}
.emojik.apple.b90 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/90.webp");
}
.emojik.apple.b91 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/91.webp");
}
.emojik.apple.b92 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/92.webp");
}
.emojik.apple.b93 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/93.webp");
}
.emojik.apple.b94 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/94.webp");
}
.emojik.apple.b95 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/95.webp");
}
.emojik.apple.b96 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/96.webp");
}
.emojik.apple.b97 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/97.webp");
}
.emojik.apple.b98 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/98.webp");
}
.emojik.apple.b99 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/99.webp");
}
.emojik.apple.b100 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/100.webp");
}
.emojik.apple.b101 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/101.webp");
}
.emojik.apple.b102 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/102.webp");
}
.emojik.apple.b103 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/103.webp");
}
.emojik.apple.b104 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/104.webp");
}
.emojik.apple.b105 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/105.webp");
}
.emojik.apple.b106 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/106.webp");
}
.emojik.apple.b107 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/107.webp");
}
.emojik.apple.b108 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/108.webp");
}
.emojik.apple.b109 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/109.webp");
}
.emojik.apple.b110 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/110.webp");
}
.emojik.apple.b111 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/111.webp");
}
.emojik.apple.b112 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/112.webp");
}
.emojik.apple.b113 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/113.webp");
}
.emojik.apple.b114 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/114.webp");
}
.emojik.apple.b115 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/115.webp");
}
.emojik.apple.b116 {
  background-image: url("https://raw.githubusercontent.com/obvionaoe/rambox-dark-themes/master/whatsapp/images/wae/i/116.webp");
}
._342qq._1mTBR {
  border-radius: var(--radius) !important;
  box-shadow: var(--bshadow);
}
._342qq._1mTBR ._2avTY {
  background-color: var(--darken) !important;
  box-shadow: inset 0 -1px var(--darker);
}
._342qq._1mTBR ._2avTY [style] {
  background-color: var(--accent) !important;
}
._342qq._1mTBR .QChXd {
  background-color: var(--dark) !important;
}
._342qq._1mTBR .QChXd [data-tab] {
  background-color: var(--dark) !important;
}
._342qq._1mTBR .QChXd [data-tab] label {
  color: var(--light) !important;
  background-color: var(--darken) !important;
  box-shadow: inset 0 0 0 1px var(--darker);
}
._342qq._1mTBR .QChXd [data-tab] input {
  color: var(--light) !important;
}
._342qq._1mTBR .QChXd ._2lKjK {
  color: var(--lighter) !important;
}
._342qq._1mTBR + [data-animate-dropdown-nib] {
  border-bottom: 1px solid var(--darker);
  border-right: 1px solid var(--darker);
  background-color: var(--dark) !important;
  box-shadow: none;
}
.overlay {
  background-color: var(--t) !important;
}
.overlay::before {
  content: '';
  z-index: -1;
  opacity: 0.81;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--dark) !important;
}
.overlay > .cGLoy,
.overlay .s4BtI {
  background-color: var(--dark) !important;
  box-shadow: 0 1px var(--darker);
}
.overlay > .cGLoy div,
.overlay .s4BtI div {
  background-color: var(--t) !important;
}
.overlay > .cGLoy .xD91K,
.overlay .s4BtI .xD91K {
  color: var(--lighter) !important;
}
.overlay > .cGLoy ._3H4MS,
.overlay .s4BtI ._3H4MS {
  color: var(--light) !important;
}
.overlay > .cGLoy ._2UaNq._3Ff9z:not(#z):not(#x):hover,
.overlay .s4BtI ._2UaNq._3Ff9z:not(#z):not(#x):hover,
.overlay > .cGLoy ._2UaNq._1k-OW:not(#z):not(#x):hover,
.overlay .s4BtI ._2UaNq._1k-OW:not(#z):not(#x):hover {
  background-color: var(--t) !important;
}
.overlay .I72vi {
  background-color: var(--darken) !important;
  overflow: hidden;
  box-shadow: 0 1px var(--darker);
}
.overlay .I72vi > div:not(#z) {
  background-color: var(--t) !important;
  border: none !important;
}
.overlay .I72vi > div:not(#z) > div {
  background-color: var(--darker) !important;
}
.overlay ._21bWq {
  background-color: var(--darken) !important;
}
.overlay ._3yth3:not(#z) {
  background-color: var(--dark) !important;
  box-shadow: inset 0 0 0 1px var(--darker), var(--bshadow);
}
.overlay ._3yth3:not(#z):hover {
  background-color: var(--darken) !important;
}
.overlay .X5OiD {
  background-color: var(--darker) !important;
}
.overlay ._3qb2N,
.overlay .JmH7x {
  color: var(--lighter) !important;
}
.overlay ._2yVvV {
  color: var(--light) !important;
}
.overlay [role = 'button']._23_1v {
  color: var(--lighter) !important;
}
.overlay [role = 'button']._23_1v:hover {
  color: var(--light) !important;
  background-color: var(--darken) !important;
  box-shadow: none;
}
.overlay [role = 'button']._3PQ7V {
  color: var(--white) !important;
  background-color: var(--accent) !important;
  box-shadow: var(--bshadow);
  transition: 0.15s ease;
}
.overlay [role = 'button']._3PQ7V:hover {
  opacity: 0.8;
}
.overlay [data-animate-modal-popup]:not(._2ILbv) {
  border: 1px solid var(--darker);
  border-radius: var(--radius);
  background-color: var(--dark) !important;
  box-shadow: 0 4px 8px 2px var(--shadow);
}
.overlay [data-animate-modal-popup]:not(._2ILbv) ._13HPh {
  color: var(--light) !important;
}
.overlay [data-animate-modal-popup]:not(._2ILbv) ._2VDPW {
  background-color: var(--darken) !important;
}
.overlay [data-animate-modal-popup]:not(._2ILbv) ._1KDYa {
  background-color: var(--t) !important;
}
.overlay [data-animate-modal-popup]:not(._2ILbv) ._1KDYa > header {
  border-bottom: 1px solid var(--darker);
  color: var(--light) !important;
  background-color: var(--darken) !important;
}
.overlay [data-animate-modal-popup]:not(._2ILbv) ._1KDYa .r7sRK {
  color: var(--accent) !important;
  background-color: var(--t) !important;
}
.overlay [data-animate-modal-popup]:not(._2ILbv) ._1KDYa ._2UaNq {
  color: var(--light) !important;
  background-color: var(--t) !important;
}
.overlay [data-animate-modal-popup]:not(._2ILbv) ._1KDYa > span > div[style] {
  border-top: 1px solid var(--darker);
  color: var(--light) !important;
  background-color: var(--darken) !important;
}
.overlay [data-animate-modal-popup]:not(._2ILbv) ._1KDYa > span > div[style] [role = 'button'] {
  background-color: var(--accent) !important;
  box-shadow: var(--bshadow);
}
.overlay [data-animate-modal-popup]:not(._2ILbv) span[role = 'button'] {
  color: var(--accent) !important;
}
.overlay [data-animate-modal-popup]:not(._2ILbv) hr {
  border-color: var(--darker) !important;
}
.overlay [data-animate-modal-popup]:not(._2ILbv) hr + div {
  color: var(--light) !important;
}
.overlay [data-animate-modal-popup]:not(._2ILbv)._3RiLE {
  padding: 0 !important;
}
.overlay [data-animate-modal-popup]:not(._2ILbv)._3RiLE > .aymnx {
  padding: 22px 24px 20px !important;
}
.overlay [data-animate-modal-popup]:not(._2ILbv)._3RiLE .AZ3xD {
  margin: 0;
}
.overlay [data-animate-modal-body] ._1BdTk {
  border-left: none;
}
.overlay [data-animate-modal-body] ._3979j {
  background-color: var(--t) !important;
}
.overlay [data-animate-modal-body] ._1DKwn {
  background-color: var(--darken) !important;
  box-shadow: var(--bshadow);
}
.overlay [data-animate-modal-body] ._2HyTU,
.overlay [data-animate-modal-body] ._22aOT {
  min-height: 91px;
  background-color: var(--darken) !important;
  box-shadow: inset 0 1px var(--darker);
}
.overlay ._1VwzF {
  background-color: var(--t) !important;
}
.overlay ._1VwzF ._1VI-m {
  color: var(--light) !important;
}
.overlay ._1VwzF [role = 'button'] {
  background-color: var(--accent) !important;
}
.overlay ._8icek {
  fill-opacity: 0.55;
}
.overlay ._2Vo52 .XOIaT {
  background-color: var(--darken) !important;
}
.overlay ._2Vo52 ._1WSDe {
  color: var(--light) !important;
}
.overlay ._2Vo52 ._3WFBR,
.overlay ._2Vo52 .vJCph,
.overlay ._2Vo52 ._2oG62 {
  color: var(--lighter) !important;
}
.overlay .WOXAS,
.overlay ._1v8mQ {
  background-color: var(--t) !important;
  box-shadow: 0 1px var(--darker) !important;
}
.fwByR {
  color: var(--accent) !important;
}
.overlay ._1wt6r,
._3Yulp,
.bHCVK {
  color: var(--lighter) !important;
}
.overlay ._3hnO5 {
  border-color: var(--accent) !important;
}
.overlay ._1T8rb {
  color: var(--accent) !important;
  background-color: var(--t) !important;
}
.overlay .NWyjc.AZ3xD {
  margin: 16px;
}
._2vOyW._26EsD .lz4Mo {
  color: var(--light) !important;
}
[data-animate-status-v3-modal-background = 'true'] {
  background-color: var(--t) !important;
}
[data-animate-status-v3-modal-background = 'true']::before {
  content: '';
  z-index: -1;
  opacity: 0.91;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--dark) !important;
}
[data-animate-status-v3-modal-background = 'true'] > div {
  background-color: var(--dark) !important;
}
@media (min-width: 1441px) {
  [data-animate-status-v3-modal-background = 'true'] > div {
    border-radius: var(--radius);
    border: 1px solid var(--darker);
  }
}
[data-animate-status-v3-modal-background = 'true'] > div hr {
  opacity: 1;
  border: none;
  border-top: 1px solid var(--darker);
}
[data-animate-status-v3-modal-background = 'true'] > div > div[class]:nth-child(1) {
  background-color: var(--darken) !important;
  box-shadow: 1px 0 var(--darker);
}
@media (min-width: 1441px) {
  [data-animate-status-v3-modal-background = 'true'] > div > div[class]:nth-child(1) {
    border-radius: var(--radius) 0 0 var(--radius);
  }
}
[data-animate-status-v3-modal-background = 'true'] > div > div[class]:nth-child(1) .OEFaY {
  color: var(--lighter) !important;
}
[data-animate-status-v3-modal-background = 'true'] > div > div[class]:nth-child(1) ._26-u- {
  color: var(--light) !important;
}
[data-animate-status-v3-modal-background = 'true'] > div > div[class]:nth-child(2) .ojaNO {
  color: var(--lighter) !important;
}
[data-animate-status-v3-modal-background = 'true'] > div > div[class]:nth-child(2) svg[width][height] path {
  fill: var(--t) !important;
  stroke: var(--light) !important;
}
[data-animate-status-v3-modal-background = 'true'] > div ._2UaNq {
  border-top: none;
}
.QRsOy {
  background-color: var(--dark) !important;
}
circle {
  stroke: var(--lighter) !important;
}
circle._3yudO {
  stroke: var(--accent) !important;
}
._2n0jo {
  border-color: var(--darker) !important;
  background-color: var(--darken) !important;
}
._2n0jo ._1LdNS.cJP5q {
  border: none !important;
  outline: 4px solid var(--accent);
}
._2n0jo ._1LdNS:hover:not(.cJP5q):not(#spec) {
  outline: 4px solid var(--accent) !important;
}
span[class][data-icon] > svg > path {
  fill: var(--light);
  transition: 0.15s ease;
}
span[class][data-icon]:hover > svg > path {
  opacity: 1;
  fill-opacity: 1 !important;
}
span[class][data-icon][data-icon*='logo-'] > svg > path {
  fill-opacity: 0.6 !important;
}
span[class][data-icon][data-icon*='logo-'] > svg > path:first-child {
  fill: var(--dark);
}
span[class][data-icon][data-icon*='logo-'] > svg > path:last-child {
  fill: var(--light);
}
span[class][data-icon][data-icon='muted'] > svg > path,
span[class][data-icon][data-icon='pinned'] > svg > path,
span[class][data-icon][data-icon='status-image'] > svg > path,
span[class][data-icon][data-icon='status-video'] > svg > path,
span[class][data-icon][data-icon='status-gif'] > svg > path,
span[class][data-icon][data-icon='status-vcard'] > svg > path,
span[class][data-icon][data-icon='status-sticker'] > svg > path,
span[class][data-icon][data-icon='status-document'] > svg > path,
span[class][data-icon][data-icon='recalled-in'] > svg > path,
span[class][data-icon][data-icon='recalled-out'] > svg > path {
  fill-opacity: 0.25 !important;
}
span[class][data-icon = 'status-v3-unread'] path:last-child {
  fill: var(--accent) !important;
}
span[class][data-icon = 'chat'] path {
  opacity: 1;
}
span[class][data-icon = 'menu'] path {
  fill-opacity: 0.55;
}
span[class][data-icon = 'back-blue'] path {
  fill: var(--blue) !important;
}
span[class][data-icon ^= 'default-'] path:first-child {
  fill: var(--dark);
}
span[class][data-icon ^= 'default-'] path:last-child {
  fill: var(--lighter);
}
span[class][data-icon $= '-square'] path:first-child {
  fill: var(--t);
}
span[class][data-icon ^= 'business-'] path {
  fill: var(--lighter);
}
span[class][data-icon = 'audio-file'] path:first-child {
  fill: var(--orange);
}
span[class][data-icon = 'audio-file'] path:last-child {
  fill: var(--darken);
}
span[class][data-icon ^= 'ptt-'] path:first-child {
  fill: var(--darker);
}
span[class][data-icon ^= 'ptt-'] path:last-child {
  fill: var(--accent);
}
span[class][data-icon = 'status-ptt-blue'] path {
  fill: var(--accent) !important;
}
span[class][data-icon *= '-check'] path {
  fill: var(--lighter) !important;
}
span[class][data-icon *= '-dblcheck'] path {
  fill: var(--lighter) !important;
}
span[class][data-icon *= '-dblcheck-ack'] path,
span[class].Ryz_m[data-icon *= '-dblcheck'] path,
span[class]._3rqs1[data-icon *= '-dblcheck'] path,
span[class]._33bww[data-icon *= '-dblcheck'] path,
._1t84_ span[class][data-icon *= '-dblcheck'] path {
  fill: var(--accent) !important;
}
span[class][data-icon *= 'check'] path {
  fill-opacity: 1 !important;
}
span[class][data-icon = 'exit'] path,
span[class][data-icon = 'thumbs-down'] path,
span[class][data-icon = 'delete-danger'] path,
span[class][data-icon ^= 'miss'] path {
  fill: var(--red) !important;
}
svg[width = '50'][height = '50'] > circle[fill] {
  stroke: var(--lighter);
}
span[class][data-icon = 'sticker-placeholder'] > svg > path {
  fill: var(--darker);
  fill-opacity: 0.6;
}
span[class][data-icon = 'search'] path[fill-opacity = '.3'] {
  fill-opacity: 0.55;
}
span[class][data-icon = 'checkbox-round-checked'] [fill = '#00BFA5'] {
  fill: var(--accent) !important;
}
span[class][data-icon = 'checkbox-round-checked'] [fill = '#FFF'] {
  fill: var(--white) !important;
}
span[class][data-icon *= 'status-ptt-green'] > svg > path {
  fill: var(--accent);
}
span[class][data-icon = 'star'] > svg > path,
span[class][data-icon = 'star-in'] > svg > path,
span[class][data-icon = 'star-light'] > svg > path {
  opacity: 1;
  fill: var(--accent);
}
span[class][data-icon = 'down'] {
  fill-opacity: 0.55;
}
div:not(#z)[style ^= 'transform-origin:'] {
  border: 1px solid var(--darker);
  border-radius: var(--radius);
  background-color: var(--darken) !important;
  box-shadow: 0 4px 12px var(--sh-h);
}
div:not(#z)[style ^= 'transform-origin:'] ul > div {
  color: var(--light) !important;
}
div:not(#z)[style ^= 'transform-origin:'] li._3VXiW {
  background-color: var(--darker) !important;
}
div:not(#z)[style ^= 'transform-origin:'] li > button span {
  color: var(--lighter) !important;
}
div:not(#z)[style ^= 'transform-origin:'] li > button:hover span {
  color: var(--light) !important;
}
div:not(#z)[style ^= 'transform-origin:'] li > div {
  color: var(--lighter) !important;
}
div:not(#z)[style ^= 'transform-origin:'] li > div:hover {
  color: var(--light) !important;
}
div:not(#z)[style ^= 'transform-origin:'] svg path[fill = '#5696ff'] {
  fill: var(--blue) !important;
}
div:not(#z)[style ^= 'transform-origin:'] svg path[fill = '#54c166'] {
  fill: var(--green) !important;
}
div:not(#z)[style ^= 'transform-origin:'] svg path[fill = '#ff7a6b'] {
  fill: var(--orange) !important;
}
div:not(#z)[style ^= 'transform-origin:']._1fRWV {
  background-color: var(--t) !important;
  border: none !important;
  box-shadow: none !important;
}
div:not(#z)[style ^= 'transform-origin:']._1fRWV li {
  background-color: var(--t) !important;
}
div:not(#z)[style ^= 'transform-origin:']._1fRWV .Ijb1Q::after {
  box-shadow: var(--bshadow) !important;
}
div:not(#z)[style ^= 'transform-origin:']._1fRWV ._3Fjw5 {
  color: var(--light) !important;
  background-color: var(--darker) !important;
  box-shadow: var(--bshadow);
}
div:not(#z)[style ^= 'transform-origin:'] > ul._3z3lc li._1sHYl {
  background-color: var(--t) !important;
}
div:not(#z)[style ^= 'transform-origin:'] > ul._3z3lc > li:first-child {
  border-color: var(--darker) !important;
}
div:not(#z)[style ^= 'transform-origin:'] > ul._3z3lc + [data-animate-dropdown-nib] {
  border-bottom: 1px solid var(--darker);
  border-right: 1px solid var(--darker);
  bottom: -8px;
  background-color: var(--darken) !important;
}
#side {
  background-color: var(--dark) !important;
}
#side > header {
  border-bottom: 1px solid var(--darker);
  background-color: var(--darken) !important;
}
#side > header [style *= 'height: 40px'] {
  background-color: var(--t) !important;
}
#side > header + span[class] ._1puWZ,
#side > header + span[class] ._2xikZ,
#side > header + span[class] ._1sFYw,
#side > header + span[class] ._2t3oV {
  border-bottom: 1px solid var(--darker);
  background-color: var(--darken) !important;
}
#side > header + span[class] ._1puWZ *,
#side > header + span[class] ._2xikZ * {
  color: var(--yellow) !important;
}
#side > header + span[class] ._1puWZ [data-icon ^= 'chevron-'] path,
#side > header + span[class] ._2xikZ [data-icon ^= 'chevron-'] path {
  fill: var(--yellow);
}
#side > header + span[class] ._1puWZ [data-icon ^= 'alert-'] path[fill ^= '#FFF'],
#side > header + span[class] ._2xikZ [data-icon ^= 'alert-'] path[fill ^= '#FFF'] {
  fill: var(--yellow);
}
#side > header + span[class] ._1puWZ [data-icon ^= 'alert-'] path[fill ^= '#FFB'],
#side > header + span[class] ._2xikZ [data-icon ^= 'alert-'] path[fill ^= '#FFB'] {
  fill: var(--darken);
}
#side > header + span[class] ._1sFYw * {
  color: var(--blue) !important;
}
#side > header + span[class] ._1sFYw [data-icon ^= 'chevron-'] path {
  fill: var(--blue) !important;
}
#side > header + span[class] ._1sFYw [data-icon ^= 'alert-'] path[fill ^= '#FFF'] {
  fill: var(--blue);
}
#side > header + span[class] ._2t3oV * {
  color: var(--red) !important;
}
#side > header + span[class] ._2t3oV [data-icon ^= 'chevron-'] path {
  fill: var(--red) !important;
}
#side > header + span[class] ._2t3oV [data-icon ^= 'alert-'] path[fill ^= '#FFF'] {
  fill: var(--red);
}
#side > header + span[class] ._1cvvW path {
  fill-opacity: 0.55;
}
div[class *= 'ZP8RM'] {
  transition: 0.2s ease;
  border-bottom: 1px solid var(--darker);
  background-color: var(--darken) !important;
}
div[class *= 'ZP8RM']._19OGD {
  background-color: var(--dark) !important;
}
div[class *= 'ZP8RM']::after {
  content: none;
}
div[class *= 'ZP8RM'] > div + label {
  border-radius: 4px !important;
  background-color: var(--dark) !important;
}
div[class *= 'ZP8RM'] > div + label:not(:focus-within) {
  box-shadow: inset 0 0 0 1px var(--darker);
}
div[class *= 'ZP8RM'] > div + label input {
  color: var(--light) !important;
  background-color: var(--t) !important;
}
div[class *= 'ZP8RM'] > div + label:focus-within {
  background-color: var(--t) !important;
}
._2HS9r {
  background-color: var(--t) !important;
}
div[class *= 'ZP8RM'] ._183ES,
div[class *= 'ZP8RM'] ._201Bk {
  color: var(--lighter) !important;
}
#side #pane-side {
  background-color: var(--darken) !important;
}
#side #pane-side [style *= 'z-index'] > div > div[class] {
  background-color: var(--t) !important;
}
#side #pane-side [style *= 'z-index'] > div > div[class]:hover {
  background-color: rgba(85,85,85,0.082) !important;
}
#side #pane-side [style *= 'z-index'] > div > div[class]._3mMX1 {
  background-color: var(--darker) !important;
}
#side #pane-side [style *= 'z-index'] > div > div[class]::after,
#side #pane-side [style *= 'z-index'] > div > div[class] > div:last-child {
  border: none;
}
#side #pane-side [style *= 'z-index'] > div > div[class] > div:last-child > div:first-child > div:first-child {
  color: var(--light) !important;
}
#side #pane-side [style *= 'z-index'] > div > div[class] > div:last-child > div:first-child > div:last-child {
  color: var(--lighter) !important;
}
#side #pane-side [style *= 'z-index'] > div > div[class] > div:last-child > div:last-child {
  color: var(--lighter) !important;
}
#side #pane-side [style *= 'z-index'] > div > div[class] > div:last-child strong {
  color: var(--lighter) !important;
}
.P6z4j {
  color: var(--white) !important;
  background-color: var(--accent) !important;
}
#side #pane-side ._2xINO {
  height: 0;
}
#side .r7sRK {
  color: var(--accent) !important;
  background-color: var(--t) !important;
  box-shadow: 0 1px var(--darker);
}
._2t4Ic .copyable-area:not(.overlay) {
  background-color: var(--darken) !important;
}
._2t4Ic .copyable-area header {
  height: unset;
  min-height: unset !important;
  border-bottom: 1px solid var(--darker);
  background-color: var(--darken) !important;
}
._1pYs5:not(#z) {
  margin: 0;
  padding-top: 4px;
  font-size: 18px;
  font-weight: 500;
}
._2t4Ic .copyable-area header .kyJvR {
  height: 58px;
  color: var(--light) !important;
}
._2t4Ic .copyable-area header .kyJvR ._6xQdq {
  color: var(--light) !important;
}
._2t4Ic .copyable-area ._2LSbZ {
  background-color: var(--t) !important;
  box-shadow: none;
}
._2t4Ic .copyable-area ._2LSbZ ._3he1q {
  color: var(--accent) !important;
}
._2t4Ic .copyable-area ._2LSbZ ._3K9Sw {
  border-color: var(--t) !important;
}
._5UNoc ._3hnO5 {
  border-color: var(--accent) !important;
}
._2UaNq {
  border-top: 1px solid var(--darker);
  background-color: var(--t) !important;
}
._2UaNq::after {
  content: none !important;
}
._2UaNq:hover:not(#z):not(._27Ppf) {
  background-color: rgba(85,85,85,0.063) !important;
}
._2UaNq [style *= 'height: 82px'] {
  background-color: var(--t) !important;
}
._2UaNq ._2WP9Q {
  border-top: none !important;
}
._2UaNq ._3H4MS {
  color: var(--light) !important;
}
._2UaNq .xD91K {
  color: var(--lighter) !important;
}
._2UaNq._30Q1W :not(#z) {
  color: var(--lighter) !important;
}
._2UaNq._3fAgu {
  border-top: none !important;
}
._2UaNq._27Ppf {
  background-color: var(--darker) !important;
}
._2UaNq._27Ppf [style *= 'height: 26px'] {
  background-color: var(--darker) !important;
}
._2t4Ic .copyable-area ._26JG5 {
  border-bottom: 1px solid var(--darker);
  background-color: var(--t) !important;
  box-shadow: 0 -1px var(--darker);
}
._2t4Ic .copyable-area ._26JG5:hover {
  background-color: rgba(85,85,85,0.063) !important;
}
._2t4Ic .copyable-area ._26JG5::before {
  content: none;
}
._2t4Ic .copyable-area ._26JG5 > div:last-child {
  border-color: var(--t) !important;
}
._2t4Ic .copyable-area ._26JG5 ._6xQdq {
  color: var(--light) !important;
}
.wjdTm,
._2t4Ic .copyable-area ._1qWhd {
  color: var(--lighter) !important;
}
._2t4Ic .copyable-area ._1w-mX {
  background-color: var(--t) !important;
}
._2t4Ic .copyable-area ._1w-mX input {
  color: var(--light) !important;
}
._2t4Ic .copyable-area ._1w-mX ._39cGk {
  border-color: var(--darker) !important;
}
._2t4Ic .copyable-area ._1w-mX + ._1c8mz {
  background-color: var(--t) !important;
}
._2t4Ic .copyable-area ._1w-mX + ._1c8mz .r7sRK {
  color: var(--accent) !important;
  background-color: var(--t) !important;
}
.r7sRK:not(#z) {
  box-shadow: inset 0 1px var(--darker) !important;
}
._2t4Ic .copyable-area ._1w-mX + ._1c8mz ._8-yzK {
  background-color: var(--t) !important;
}
._2t4Ic .copyable-area ._1w-mX + ._1c8mz ._2DxRd,
._2t4Ic .copyable-area ._1w-mX + ._1c8mz ._2WP9Q {
  border-color: var(--t) !important;
}
._1wt6r {
  color: var(--lighter) !important;
}
._2t4Ic .copyable-area ._1c8mz ._11p3Q,
._2t4Ic .copyable-area ._1c8mz ._8-yzK {
  background-color: var(--t) !important;
}
._2t4Ic .copyable-area ._1c8mz .r7sRK {
  color: var(--accent) !important;
  background-color: var(--t) !important;
}
._3p0T6 {
  background-color: var(--accent) !important;
}
._3p0T6.w4k6i {
  background-color: var(--t) !important;
}
._3p0T6.w4k6i path {
  fill-opacity: 0.55;
}
._2t4Ic .copyable-area ._1c8mz ._2DxRd,
._2t4Ic .copyable-area ._1c8mz ._2WP9Q {
  border: none;
}
._2t4Ic .copyable-area ._1WMT2::before {
  margin-top: -1px;
  left: 0;
  background-color: var(--darker) !important;
}
._2t4Ic .copyable-area ._1WMT2::after {
  content: none;
}
._2t4Ic .copyable-area ._1WMT2._1lakC,
._2t4Ic .copyable-area ._1WMT2._2nA3s,
._2t4Ic .copyable-area ._1WMT2._2V_Wj {
  background-color: rgba(85,85,85,0.063) !important;
}
._2t4Ic .copyable-area ._1WMT2 ._2V2qB,
._2t4Ic .copyable-area ._1WMT2 .jLybP::before {
  color: var(--lighter) !important;
}
._2t4Ic .copyable-area ._1WMT2 .tail,
._2t4Ic .copyable-area ._1WMT2 .tail > div[class] {
  border-radius: 7.5px !important;
}
._2t4Ic .copyable-area ._1WMT2 .tail-container {
  display: none !important;
}
._2t4Ic .copyable-area ._1WMT2 [style *= 'height: 26px; width: 26px'] {
  background-color: var(--t) !important;
}
._2t4Ic .copyable-area #pane-side {
  background-color: var(--t) !important;
}
._2t4Ic .copyable-area ._2TLLH {
  border-color: var(--t) !important;
}
._2t4Ic .copyable-area ._13U-5,
._3dwyT {
  color: var(--lighter) !important;
}
._2t4Ic .copyable-area ._1i7uJ {
  background-color: var(--darker) !important;
}
._2t4Ic .copyable-area ._2MoEz {
  color: var(--light) !important;
}
._7YAGC .copyable-area [style *= 'height: 200px'] ._2EaHs {
  background-color: var(--darken) !important;
}
._7YAGC .copyable-area ._1drsQ {
  color: var(--light) !important;
}
._7YAGC .copyable-area ._2IwIk,
._7YAGC .copyable-area ._1goQ0 {
  color: var(--lighter) !important;
}
._7YAGC .copyable-area ._3_-Si {
  padding: 0 15px;
}
._7YAGC .copyable-area ._3_-Si > ._2x2XP {
  padding-right: 0;
}
._7YAGC .copyable-area ._3_-Si > div {
  border-color: var(--darker) !important;
}
._7YAGC .copyable-area ._3_-Si span {
  color: var(--light) !important;
}
._7YAGC .copyable-area ._1ur1f {
  padding: 28px 15px 19px;
}
._7YAGC .copyable-area ._2ZVEo {
  padding: 14px 15px 10px;
}
._7YAGC .copyable-area ._2k1Z5 {
  padding: 14px 15px 4px;
}
._7YAGC .copyable-area ._3EN0l {
  padding: 14px 15px;
}
._7YAGC .copyable-area .ujWpH {
  padding: 14px 15px;
}
._7YAGC .copyable-area ._2nQ7u,
._7YAGC .copyable-area ._1goQ0 {
  padding: 0;
}
._7YAGC .copyable-area ._2nQ7u + div[class] > div {
  padding-top: 1px;
}
._7YAGC .copyable-area ._2LSbZ._2j5ir {
  margin-bottom: unset;
}
._7YAGC .copyable-area ._1tyVr {
  padding: 0 15px;
  width: auto;
}
._7YAGC .copyable-area ._2h7Od path,
._7YAGC .copyable-area ._88RDg path {
  opacity: 0.55 !important;
}
._7YAGC .copyable-area ._2h7Od:hover > span > svg > path,
._7YAGC .copyable-area ._88RDg:hover > span > svg > path {
  opacity: 1 !important;
  fill-opacity: 0.9 !important;
}
._7YAGC .copyable-area ._2rGVQ {
  border-bottom: 1px solid var(--darker);
  background-color: var(--t) !important;
}
._7YAGC .copyable-area ._2AJf5 {
  background-color: var(--t) !important;
}
._7YAGC .copyable-area ._2AJf5 span {
  color: var(--accent) !important;
}
._7YAGC .copyable-area ._19xqi {
  background-color: var(--t) !important;
  box-shadow: 0 1px var(--darker);
}
._7YAGC .copyable-area ._3XHR- {
  color: var(--light) !important;
  border-color: var(--darker) !important;
  background-color: var(--t) !important;
}
._7YAGC .copyable-area ._3XHR- span {
  color: inherit;
}
._7YAGC .copyable-area .rK2ei:not(._1c8mz):not(#z):not(#x) ._2UaNq:hover {
  background-color: var(--t) !important;
  box-shadow: none !important;
}
._7YAGC .copyable-area .rK2ei:not(._1c8mz):not(#z):not(#x) ._2UaNq._27Ppf:hover {
  background-color: var(--darker) !important;
}
._7YAGC .copyable-area ._2WP9Q {
  border: none;
}
._7YAGC .copyable-area ._3dwyT {
  color: var(--lighter) !important;
}
._7YAGC .copyable-area [style]:not(#z):not(#x) > div > ._2UaNq._3sA1g:hover,
._7YAGC .copyable-area [style]:not(#z):not(#x) > div > ._2UaNq._3mMX1,
._7YAGC .copyable-area [style]:not(#z):not(#x) > div > ._2UaNq.hover {
  background-color: rgba(85,85,85,0.063) !important;
}
._7YAGC .copyable-area span[title] > span[dir] {
  color: var(--light) !important;
}
._0LqQ {
  color: var(--lighter) !important;
}
._7YAGC .copyable-area .BfrqJ > header._3jHKU {
  height: 59px;
  background-color: var(--darken) !important;
  box-shadow: inset 0 -1px var(--darker);
}
._7YAGC .copyable-area .BfrqJ > header._3jHKU div {
  color: var(--light) !important;
}
._3jHKU {
  z-index: 999 !important;
}
._7YAGC .copyable-area ._2XHj8 {
  background-color: var(--darken) !important;
  box-shadow: inset 0 -1px var(--darker);
}
._7YAGC .copyable-area ._2XHj8 span {
  color: var(--light) !important;
}
._7YAGC .copyable-area [data-active-tab] {
  border-bottom: 1px solid var(--darker);
  background-color: var(--dark) !important;
}
._7YAGC .copyable-area [data-active-tab] button {
  color: var(--lighter) !important;
}
._7YAGC .copyable-area [data-active-tab] button:hover {
  background-color: var(--darken) !important;
}
._7YAGC .copyable-area [data-active-tab] button._3caqI {
  color: var(--light) !important;
}
._7YAGC .copyable-area [data-active-tab]::before {
  margin-bottom: -1px;
  height: 1px;
  background-color: var(--blue) !important;
}
._2Ji5m {
  border-color: var(--darken) !important;
}
._1mseJ ._3wYPn {
  border-left: 1px solid var(--darker);
}
#main {
  background-color: var(--dark) !important;
}
[data-asset-chat-background] {
  opacity: 1 !important;
  filter: invert(var(--chat-bg-i)) opacity(var(--chat-bg-o));
  background: var(--chat-image);
}
#main > header {
  border-right: none;
  border-bottom: 1px solid var(--darker);
  border-color: var(--darker) !important;
  background-color: var(--darken) !important;
}
#main > header::after {
  content: none;
}
#main > header [style *= 'height: 40px'] {
  background-color: var(--t) !important;
}
#main > header [title] {
  color: var(--light) !important;
}
#main > header > div:nth-child(2) > div:nth-child(2) span[title] {
  color: var(--lighter) !important;
}
#main ._3SYkD > div {
  border-bottom: 1px solid var(--darker);
  border-left: 1px solid var(--darker);
  background-color: var(--darken);
}
#main ._3SYkD ._6xQdq,
#main ._3SYkD ._3GIEC {
  color: var(--light) !important;
}
#main ._3SYkD ._3D8gv {
  color: var(--lighter) !important;
}
#main ._2sOZc {
  background-color: var(--darken) !important;
  box-shadow: inset 0 0 0 1px var(--darker), var(--bshadow);
}
#main ._2sOZc svg circle {
  stroke: var(--green);
}
#main .a7otO {
  opacity: 0.95;
  letter-spacing: 0;
  font-weight: 600;
  text-shadow: none;
  color: var(--light) !important;
  background-color: var(--darken) !important;
  box-shadow: var(--bshadow), inset 0 0 0 1px var(--darker), inset 0 -3px var(--darker);
}
#main .a7otO.S-bQb {
  color: var(--orange) !important;
}
#main .a7otO:not(.tail) {
  color: var(--light) !important;
}
#main ._3KRbU {
  background-color: var(--darken) !important;
  transition: 0.15s ease;
  box-shadow: inset 0 0 0 1px var(--darker), 0 4px 8px var(--shadow);
}
#main ._3KRbU:hover {
  background-color: var(--darker) !important;
}
#main ._3KRbU .P6z4j {
  color: var(--white) !important;
  background-color: var(--accent) !important;
}
#main .copyable-area > div[tabindex] {
  border-color: var(--darker) !important;
}
#main .copyable-area > div[tabindex] ._1ays2 {
  display: flex !important;
  flex-direction: column !important;
}
#main .copyable-area > div[tabindex]._2AqZl {
  background-color: var(--t) !important;
}
#main .copyable-area > div[tabindex]._2AqZl [class *= 'message-'] {
  position: relative;
}
.qTFAl {
  z-index: 999 !important;
}
.qTFAl::before {
  content: '';
  opacity: 0.08;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.qTFAl:hover,
.qTFAl._3Z2tD {
  background-color: var(--t) !important;
}
.qTFAl:hover::before,
.qTFAl._3Z2tD::before {
  background-color: var(--accent) !important;
}
.qTFAl._21W00::before {
  background-color: var(--t) !important;
}
#main .copyable-area > div[tabindex]._2AqZl ._15wNI {
  border-color: var(--accent) !important;
  background-color: var(--accent) !important;
}
#main .copyable-area > div[tabindex]._2AqZl ._15wNI div {
  border-color: var(--white) !important;
}
._3f5U8 path,
._3MU5v path,
._2-qoA path {
  opacity: 0.55 !important;
}
._3f5U8:disabled path,
._3MU5v:disabled path,
._2-qoA:disabled path {
  fill: var(--lighter) !important;
  opacity: 0.25 !important;
}
._3f5U8:hover > span > svg > path,
._3MU5v:hover > span > svg > path,
._2-qoA:hover > span > svg > path {
  opacity: 1 !important;
  fill-opacity: 0.9 !important;
}
._8fE-g {
  color: var(--lighter) !important;
}
#main .copyable-area > div[tabindex] ._3Xx0y {
  color: var(--light) !important;
  border-color: var(--darker) !important;
  background-color: var(--darken) !important;
}
#main .copyable-area > div[tabindex] ._3Xx0y > span {
  background-color: var(--darker) !important;
}
#main .copyable-area > div[tabindex] a[title] > ._1mrMQ {
  color: var(--light) !important;
  background-color: var(--dark) !important;
}
#main .copyable-area > div[tabindex] a[title] + div,
#main .copyable-area > div[tabindex] a[title] + div > span::before {
  color: var(--lighter) !important;
}
#main .copyable-area > div[tabindex] ._1SsXF div > div:nth-child(1) span {
  color: var(--light) !important;
}
#main .copyable-area > div[tabindex] ._1SsXF div > div:nth-child(2) span {
  color: var(--lighter) !important;
}
#main .copyable-area > div[tabindex] ._1SsXF div > div:nth-child(3) span {
  color: var(--light) !important;
}
#main .copyable-area > div[tabindex] ._2v02G,
#main .copyable-area > div[tabindex] ._3uHCS {
  color: var(--lighter) !important;
}
#main .copyable-area > div[tabindex] ._2v02G [data-icon] path,
#main .copyable-area > div[tabindex] ._3uHCS [data-icon] path {
  fill: var(--lighter);
}
._1Jc9f,
._3THW4 {
  color: var(--accent) !important;
}
._1PENu {
  border-color: rgba(136,136,136,0.188) !important;
}
._1PENu [role = 'button'] {
  color: var(--light) !important;
}
._1mrMQ {
  background-color: var(--dark) !important;
}
._1o0MN {
  color: var(--lighter) !important;
}
.HNuTV,
._3qblR,
._1SsXF {
  background-color: var(--dark) !important;
}
._3_nIn {
  background-color: rgba(85,85,85,0.063) !important;
}
a[href][target = '_blank'] > *,
._2Lp2x > * {
  color: var(--lighter) !important;
}
a[href][target = '_blank'] > :first-child,
._2Lp2x > :first-child,
a[href][target = '_blank'] > :last-child,
._2Lp2x > :last-child {
  color: var(--light) !important;
}
._1ikYm div[style *= 'base64'] {
  filter: none !important;
}
._1ikYm ._2LRBk {
  color: var(--light) !important;
}
._1ikYm ._3fnHB {
  color: var(--lighter) !important;
}
.L4M2f,
._1d0W1 {
  border-color: var(--dark) !important;
  background-color: var(--t) !important;
}
._3ZVco {
  color: var(--light) !important;
}
.message-in > div:not(.a81-s),
.message-out > div:not(.a81-s) {
  box-shadow: 0 1px 0.5px var(--shadow) !important;
}
.message-in > div:not(.a81-s) > div,
.message-out > div:not(.a81-s) > div {
  box-shadow: none !important;
}
.message-in .tail > .tail-container,
.message-out .tail > .tail-container {
  width: unset;
  height: unset;
  border: 6px solid var(--t);
  background: none !important;
}
.message-in [data-pre-plain-text] + div *,
.message-out [data-pre-plain-text] + div * {
  color: var(--lighter) !important;
}
.message-in._26GKj ._2Nkc4:not(#z),
.message-out._26GKj ._2Nkc4:not(#z) {
  background: none !important;
}
.message-in .a81-s ._3Mf7Z,
.message-out .a81-s ._3Mf7Z {
  background-color: #383d46 !important;
  box-shadow: 0 1px var(--shadow) !important;
}
.message-in .a81-s ._3qAvH,
.message-out .a81-s ._3qAvH {
  color: var(--lighter) !important;
  box-shadow: 0 1px var(--shadow) !important;
}
.message-in .a81-s ._3qAvH div,
.message-out .a81-s ._3qAvH div {
  color: inherit;
}
.message-in .a81-s :not(.tail) > div > ._2Hp95._1X6iJ ._3Mf7Z,
.message-out .a81-s :not(.tail) > div > ._2Hp95._1X6iJ ._3Mf7Z {
  border-radius: 7.5px;
}
.message-in ._1lxsr,
.message-out ._1lxsr,
.message-in ._3MYI2,
.message-out ._3MYI2 {
  color: var(--lighter) !important;
}
.message-in [style *= 'height: 55px'],
.message-out [style *= 'height: 55px'] {
  background-color: var(--dark) !important;
  box-shadow: var(--bshadow);
}
.message-in [style *= 'height: 55px'] svg path[fill = '#DFE5E7'],
.message-out [style *= 'height: 55px'] svg path[fill = '#DFE5E7'] {
  fill: var(--t) !important;
}
.message-in.velocity-animating,
.message-out.velocity-animating {
  opacity: 0.4;
}
.message-in div[style *= 'width'][style *= 'height'] + .iVt71,
.message-out div[style *= 'width'][style *= 'height'] + .iVt71,
.message-in div[style *= 'width'][style *= 'height'] + ._3hsuL,
.message-out div[style *= 'width'][style *= 'height'] + ._3hsuL {
  padding: 2px 5px;
  border-radius: 7.5px;
  background-color: var(--darken) !important;
}
.message-in .video-thumb ._3_IKd,
.message-out .video-thumb ._3_IKd {
  padding: 2px 5px;
  border-radius: 7.5px;
  color: var(--light) !important;
  background-color: var(--dark) !important;
}
.message-in .video-thumb + div > ._3MYI2,
.message-out .video-thumb + div > ._3MYI2 {
  padding: 2px 5px;
  border-radius: 7.5px;
  color: var(--light) !important;
  background-color: var(--dark) !important;
}
._2HHbr {
  color: var(--lighter) !important;
}
.message-in ._2rg5w._3EQsG,
.message-out ._2rg5w._3EQsG {
  height: 50px;
}
.message-in > div:not(.a81-s) > div {
  color: var(--light) !important;
  background-color: #383d46 !important;
}
.message-in > div.a81-s ._3qAvH {
  background-color: #383d46 !important;
}
._3tMyP {
  background-color: #383d46 !important;
  box-shadow: 0 1px 0.5px var(--shadow) !important;
}
.message-in .tail {
  border-top-left-radius: 0 !important;
}
.message-in .tail > .tail-container {
  border-radius: 4px 0 0 0;
  border-top-color: #383d46;
  border-right-color: #383d46;
}
.message-in [role] > span[role = 'button'] + span {
  color: var(--light) !important;
}
.message-in > div > span:last-child > div[style]:not(._2PpWQ) {
  background: linear-gradient(90deg, var(--t), #383d46 80%) !important;
}
._2PpWQ._2Nkc4 div[style *= 'opacity'] {
  background-color: #383d46 !important;
}
.message-in > div > span:last-child > div[style]._20WGU {
  background: linear-gradient(30deg, var(--t) 65%, rgba(68,68,68,0.333) 120%) !important;
}
.message-in > div > span:last-child > div[style]._38wik._2Nkc4 {
  background: linear-gradient(270deg, var(--t), #383d46 80%) !important;
}
.message-in > div > span:nth-last-child(2) > div[style]._15CAo._2Nkc4 {
  background: linear-gradient(90deg, var(--t), #383d46 80%) !important;
}
.message-in > div > span:nth-last-child(2) > div[style]._15CAo._3EQsG {
  height: 23px;
  background: linear-gradient(90deg, var(--t), #383d46 80%) !important;
}
.message-in > div > span:nth-last-child(2) > div[style]._15CAo._3WZEQ {
  background: linear-gradient(90deg, var(--t), var(--dark) 60%) !important;
}
.message-in ._2HTIU {
  background-color: var(--dark) !important;
}
.message-in ._2HTIU:hover {
  opacity: 0.8;
}
.message-out > div:not(.a81-s) > div {
  color: var(--light) !important;
  background-color: #2f343d !important;
}
.message-out > div.a81-s ._3qAvH {
  background-color: #2f343d !important;
}
.message-out .tail {
  border-top-right-radius: 0 !important;
}
.message-out .tail > .tail-container {
  border-radius: 0 4px 0 0;
  border-top-color: #2f343d;
  border-left-color: #2f343d;
}
.message-out > div > span:last-child > div[style]:not(._2PpWQ) {
  background: linear-gradient(90deg, var(--t), #2f343d 80%) !important;
}
._3EQsG._2PpWQ div[style *= 'opacity'] {
  background-color: #2f343d !important;
}
.message-out > div > span:last-child > div[style]._20WGU {
  background: linear-gradient(30deg, var(--t) 65%, rgba(68,68,68,0.333) 120%) !important;
}
.message-out > div > span:last-child > div[style]._38wik._3EQsG {
  background: linear-gradient(270deg, var(--t), #2f343d 80%) !important;
}
.message-out > div > span:nth-last-child(2) > div[style]._15CAo._2Nkc4 {
  background: linear-gradient(90deg, var(--t), #2f343d 80%) !important;
}
.message-out > div > span:nth-last-child(2) > div[style]._15CAo._3EQsG {
  height: 23px;
  background: linear-gradient(90deg, var(--t), #2f343d 80%) !important;
}
.message-out > div > span:nth-last-child(2) > div[style]._15CAo._3WZEQ {
  background: linear-gradient(90deg, var(--t), var(--dark) 60%) !important;
}
.message-out ._2HTIU {
  background-color: var(--dark) !important;
}
.message-out ._2HTIU:hover {
  opacity: 0.8;
}
._1BdTk,
._1cJw0,
.kqC9O {
  border-left: 1px solid var(--darker);
  background-color: var(--dark) !important;
}
._1BdTk header,
._1cJw0 header,
.kqC9O header {
  border-bottom: 1px solid var(--darker);
  color: var(--light) !important;
  background-color: var(--darken) !important;
}
._1BdTk .Am8s6,
._1cJw0 .Am8s6,
.kqC9O .Am8s6 {
  color: var(--lighter) !important;
}
._1BdTk ._3ogpF,
._1cJw0 ._3ogpF,
.kqC9O ._3ogpF {
  border-color: var(--accent) !important;
}
._1BdTk ._1u0aP,
._1cJw0 ._1u0aP,
.kqC9O ._1u0aP {
  color: var(--light) !important;
  background-color: var(--darker) !important;
  box-shadow: var(--bshadow) !important;
}
._1BdTk > div[tabindex] > div:nth-child(2),
._1cJw0 > div[tabindex] > div:nth-child(2),
.kqC9O > div[tabindex] > div:nth-child(2) {
  border-top: 1px solid var(--darker);
  background-color: var(--darken) !important;
}
[role = 'button'] + ._2sn3C {
  background-color: var(--darken) !important;
}
[role = 'button']._1Dfrr:hover {
  background-color: var(--accent) !important;
  box-shadow: var(--bshadow);
}
[role = 'button']._3fktq {
  color: var(--accent) !important;
  background-color: var(--dark) !important;
  box-shadow: inset 0 0 0 1px var(--darker);
}
[role = 'button']._3fktq::after {
  background-color: var(--accent) !important;
}
[role = 'button']._1gcLL::after {
  background-color: var(--accent) !important;
}
[role = 'button']._1g8sv {
  background-color: var(--accent) !important;
  box-shadow: var(--bshadow);
  transition: 0.15s ease;
}
[role = 'button']._1g8sv:hover {
  opacity: 0.75;
}
.lC2xi {
  background-color: var(--dark) !important;
}
.lC2xi ._8C3uJ {
  color: var(--light) !important;
  border-color: var(--darker) !important;
}
.lC2xi ~ .NeQRT {
  background-color: var(--dark) !important;
}
#main > footer {
  background-color: var(--t) !important;
}
#main > footer .-XQxp path {
  fill-opacity: 0.55;
}
#main > footer .-XQxp._1oNFt path {
  fill-opacity: 1;
  fill: var(--accent);
}
._2mlOb {
  border-color: var(--darker) !important;
  background-color: var(--darken) !important;
  box-shadow: inset 0 1px var(--darker) !important;
}
._2mlOb::before {
  content: none;
}
._2mlOb.aWTXv {
  margin-bottom: 8px;
  border: 1px solid var(--darker) !important;
  border-radius: var(--radius) !important;
  box-shadow: var(--bshadow) !important;
}
#main > footer > div:first-child {
  border-top: 1px solid var(--darker);
  border-color: var(--darker) !important;
  background-color: var(--darken) !important;
}
#main > footer > div:first-child div[style] + div[tabindex] {
  border-radius: 4px;
  border-color: var(--darker) !important;
  background-color: var(--dark) !important;
}
#main > footer > div:first-child div[style] + div[tabindex] [style *= 'visibility'] {
  color: var(--lighter) !important;
}
#main > footer > div:first-child div[style] + div[tabindex] .focused > div[style] {
  color: var(--t) !important;
}
#main > footer [data-icon = 'ptt'] path {
  fill-opacity: 0.55;
}
#main > footer [fill = '#09D261'] {
  fill: var(--green) !important;
}
#main > footer [fill = '#E53935'] {
  fill: var(--red) !important;
}
#main > footer ._30sf0 {
  border-color: var(--darker) !important;
}
#main > footer ._30sf0 ._2avTY {
  background-color: var(--darken) !important;
  box-shadow: inset 0 1px var(--darker), inset 0 -1px var(--darker);
}
#main > footer ._30sf0 ._2avTY div[style *= 'background'] {
  background-color: var(--accent) !important;
}
#main > footer ._30sf0 ._2avTY > :not(._2wn58) {
  color: var(--lighter) !important;
}
#main > footer ._30sf0 ._2avTY > :not(._2wn58):not(:hover) path {
  fill: var(--lighter);
}
#main > footer ._30sf0 ._2avTY > :not(._2wn58):hover,
#main > footer ._30sf0 ._2avTY ._2wn58 {
  color: var(--light) !important;
}
#main > footer ._30sf0 ._2avTY .Orl3a {
  height: 1px;
  background-color: var(--accent) !important;
}
#main > footer ._30sf0 .QChXd,
#main > footer ._30sf0 ._20KNO,
#main > footer ._30sf0 .RxbUw {
  background-color: var(--dark) !important;
}
#main > footer ._30sf0 .QChXd [data-tab],
#main > footer ._30sf0 ._20KNO [data-tab],
#main > footer ._30sf0 .RxbUw [data-tab] {
  border-color: var(--darker) !important;
  background-color: var(--dark) !important;
}
#main > footer ._30sf0 .QChXd [data-tab] label,
#main > footer ._30sf0 ._20KNO [data-tab] label,
#main > footer ._30sf0 .RxbUw [data-tab] label {
  color: var(--light) !important;
  border-color: var(--darker) !important;
  background-color: var(--darken) !important;
  box-shadow: inset 0 0 0 1px var(--darker);
}
#main > footer ._30sf0 .QChXd [data-tab] label input,
#main > footer ._30sf0 ._20KNO [data-tab] label input,
#main > footer ._30sf0 .RxbUw [data-tab] label input {
  color: var(--light) !important;
}
#main > footer ._30sf0 .QChXd ._2lKjK,
#main > footer ._30sf0 ._20KNO ._2lKjK,
#main > footer ._30sf0 .RxbUw ._2lKjK {
  color: var(--lighter) !important;
}
#main > footer ._30sf0 .QChXd ._2x9yi,
#main > footer ._30sf0 ._20KNO ._2x9yi,
#main > footer ._30sf0 .RxbUw ._2x9yi {
  border-radius: 4px;
  background-color: var(--darken) !important;
}
#main > footer ._30sf0 .QChXd [data-id = 'retry'],
#main > footer ._30sf0 ._20KNO [data-id = 'retry'],
#main > footer ._30sf0 .RxbUw [data-id = 'retry'] {
  color: var(--accent) !important;
}
._3LFRS {
  background-color: var(--t) !important;
}
#main > footer + span:not([class]) > div {
  border-left: 1px solid var(--darker);
  border-top: 1px solid var(--darker);
  background-color: var(--darken) !important;
}
#main > footer ._2Pown {
  color: var(--light) !important;
  border-color: var(--darker) !important;
  background-color: var(--darken) !important;
}
#main > footer ._2Pown [role = 'button'] {
  color: var(--lighter) !important;
  background-color: var(--darker) !important;
}
#main > footer ._2Pown [role = 'button']:hover {
  color: var(--light) !important;
  box-shadow: 0 4px 8px var(--shadow);
}
#main > footer ._26pkE {
  color: var(--lighter) !important;
  border-left: 1px solid var(--darker);
}
#main > footer ._1ebw2 {
  background-color: var(--dark) !important;
  box-shadow: var(--bshadow), inset 0 1px var(--darker) !important;
}
._1F9Ap:not(#z) {
  color: var(--lighter) !important;
}
#main > footer ._1ebw2 > div:first-child:not(#z) {
  margin: 4px 0 8px 66px;
  background-color: var(--darken) !important;
}
#main > footer ._1ebw2 > div:first-child:not(#z) div[role] {
  background-color: var(--darken) !important;
}
.quoted-mention {
  color: var(--lighter) !important;
}
._1SsXF,
#main > footer ._1ebw2 > div:first-child:not(#z) ._2HTIU {
  border-radius: 6px !important;
  box-shadow: inset 0 0 0 1px var(--darker);
}
#main > footer ._1ebw2 div:last-child {
  position: relative;
  background-color: var(--t) !important;
}
#main > footer ._1ebw2 div:last-child [role = 'button'] > span > svg {
  padding: 16px;
  border-radius: 6px;
}
#main > footer ._2j-wI {
  border-color: var(--darker) !important;
  background-color: var(--dark) !important;
  box-shadow: 0 -1px var(--darker) !important;
}
#main > footer ._2j-wI::before {
  content: none;
}
#main > footer ._2j-wI .XSeqj {
  color: var(--light) !important;
  border-color: var(--darker) !important;
  background-color: var(--dark) !important;
}
#main > footer ._2j-wI .XSeqj._1Yz8K,
#main > footer ._2j-wI .XSeqj:hover {
  background-color: var(--darken) !important;
}
#main > footer ._2j-wI ._3SW-z {
  color: var(--lighter) !important;
}
._2NdXo {
  color: var(--lighter) !important;
}
@media screen and (max-height: 500px) {
  #app > div > .app {
    min-height: auto;
  }
}
@media screen and (max-width: 648px) {
  #app > div > .app {
    min-width: auto;
  }
}
@media screen and (max-width: 720px) {
  .two > div:nth-child(3),
  .three > div:nth-child(3) {
    flex: 0 0 80px !important;
    transition: 0.2s ease;
  }
  .two > div:nth-child(3):hover,
  .three > div:nth-child(3):hover,
  .two > div:nth-child(3):focus-within,
  .three > div:nth-child(3):focus-within {
    flex: 0 0 30% !important;
  }
  .two > div:nth-child(2) > div:nth-child(2) {
    flex: 0 0 calc(100% - 80px) !important;
    margin-left: calc(-25% + 80px);
  }
  .two > div:nth-child(3) {
    min-width: 1px !important;
    transition: 0.3s ease !important;
    transition-delay: 1.2s !important;
  }
  .two > div:nth-child(3):hover {
    min-width: 400px !important;
    transition-delay: var(--c-m-hover) !important;
    flex: 0 0 30% !important;
  }
  .two > :nth-child(2) > :nth-child(1) {
    z-index: 201 !important;
    flex: 0 0 30% !important;
  }
  .two > :nth-child(2) > :nth-child(1) [style][tabindex] {
    border-right: 1px solid var(--darker) !important;
  }
  .three > div:nth-child(2) > div:nth-child(2) {
    flex: 0 0 calc(100% - 30% - 80px) !important;
    margin-left: calc(-25% + 80px);
  }
  .three > div:nth-child(4) {
    flex: 0 0 calc(100% - 30% - 80px) !important;
  }
  .three > div:nth-child(3):hover {
    flex: 0 0 80px !important;
  }
  .three ._7YAGC {
    flex: 0 0 30% !important;
    border-color: var(--t) !important;
  }
  .ZP8RM:not(._19OGD) label {
    padding: 0px;
  }
  #side > header {
    min-width: 240px;
  }
  #side > header + span {
    display: none;
  }
  #side ._2UaNq .KgevS {
    padding-left: 5px !important;
  }
  #side ._2UaNq ._1ZMSM > span:not(.P6z4j) {
    display: none !important;
  }
  #side ._2UaNq ._1Wn_k > ._3VIru + span[dir],
  #side ._2UaNq ._1Wn_k > ._3VIru + div[class],
  #side ._2UaNq ._1Wn_k > :first-child:not(._3VIru) {
    margin-left: 15px;
  }
  #side ._2UaNq ._1ZMSM .P6z4j {
    z-index: 999 !important;
    margin: 7px 0px 0px -60px !important;
    box-shadow: 0 0 0 3px var(--darken) !important;
  }
  #side ._2UaNq .xD91K {
    z-index: 199 !important;
    display: flex !important;
    flex-direction: row-reverse !important;
  }
  ._2ZAIy {
    overflow: unset !important;
    margin-top: -8px !important;
    margin-left: 16px !important;
    position: absolute;
  }
  ._2ZAIy::before {
    content: '';
    z-index: -3;
    position: absolute;
    top: -30px;
    right: 72px;
    bottom: 0;
    left: -72px;
    border: 2px solid var(--green);
    border-radius: var(--avatar-r);
    animation: 2s _20RFk infinite;
  }
  #side ._2UaNq ._1ZMSM {
    margin-right: 0;
  }
  #side ._2UaNq ._3VIru {
    padding: 1.5px;
    z-index: 101;
    position: absolute;
    margin: 4px 0 0 -60px;
    border-radius: 50%;
    background-color: var(--dark) !important;
    box-shadow: 0 0 0 3px var(--darken);
  }
  #side ._2UaNq ._3VIru > span > svg {
    padding: 2px;
    height: 14px !important;
    width: 14px !important;
  }
  #side ._2UaNq._3mMX1 .xD91K .P6z4j,
  #side ._2UaNq._3mMX1 .xD91K ._3VIru {
    box-shadow: 0 0 0 3px var(--darker) !important;
  }
  #side ._2UaNq:hover:not(._3mMX1) .xD91K .P6z4j,
  #side ._2UaNq:hover:not(._3mMX1) .xD91K ._3VIru {
    box-shadow: 0 0 0 3px rgba(255,255,255,0.02), 0 0 0 3px var(--darken) !important;
  }
  #side ._0LqQ {
    margin-left: -10px !important;
    overflow: unset !important;
  }
  #side ._0LqQ > span:last-child:not(._17TaE) {
    display: none !important;
  }
}
._1QjgA {
  color: var(--accent) !important;
}
.color-0 {
  color: var(--blue) !important;
}
.color-1 {
  color: var(--cyan) !important;
}
.color-2 {
  color: var(--green) !important;
}
.color-3 {
  color: var(--violet) !important;
}
.color-4 {
  color: var(--magenta) !important;
}
.color-5 {
  color: var(--red) !important;
}
.color-6 {
  color: var(--orange) !important;
}
.color-7 {
  color: var(--yellow) !important;
}
.color-8 {
  color: var(--blue) !important;
  filter: hue-rotate(20deg);
}
.color-9 {
  color: var(--cyan) !important;
  filter: hue-rotate(20deg);
}
.color-10 {
  color: var(--green) !important;
  filter: hue-rotate(20deg);
}
.color-11 {
  color: var(--violet) !important;
  filter: hue-rotate(20deg);
}
.color-12 {
  color: var(--magenta) !important;
  filter: hue-rotate(20deg);
}
.color-13 {
  color: var(--red) !important;
  filter: hue-rotate(20deg);
}
.color-14 {
  color: var(--orange) !important;
  filter: hue-rotate(20deg);
}
.color-15 {
  color: var(--yellow) !important;
  filter: hue-rotate(20deg);
}
.color-15 {
  color: var(--blue) !important;
  filter: hue-rotate(40deg);
}
.color-16 {
  color: var(--cyan) !important;
  filter: hue-rotate(40deg);
}
.color-17 {
  color: var(--green) !important;
  filter: hue-rotate(40deg);
}
.color-18 {
  color: var(--violet) !important;
  filter: hue-rotate(40deg);
}
.color-19 {
  color: var(--magenta) !important;
  filter: hue-rotate(40deg);
}
.color-20 {
  color: var(--red) !important;
  filter: hue-rotate(40deg);
}
.bg-color-0 {
  background-color: var(--blue) !important;
}
.bg-color-1 {
  background-color: var(--cyan) !important;
}
.bg-color-2 {
  background-color: var(--green) !important;
}
.bg-color-3 {
  background-color: var(--violet) !important;
}
.bg-color-4 {
  background-color: var(--magenta) !important;
}
.bg-color-5 {
  background-color: var(--red) !important;
}
.bg-color-6 {
  background-color: var(--orange) !important;
}
.bg-color-7 {
  background-color: var(--yellow) !important;
}
.bg-color-8 {
  background-color: var(--blue) !important;
  filter: hue-rotate(20deg);
}
.bg-color-9 {
  background-color: var(--cyan) !important;
  filter: hue-rotate(20deg);
}
.bg-color-10 {
  background-color: var(--green) !important;
  filter: hue-rotate(20deg);
}
.bg-color-11 {
  background-color: var(--violet) !important;
  filter: hue-rotate(20deg);
}
.bg-color-12 {
  background-color: var(--magenta) !important;
  filter: hue-rotate(20deg);
}
.bg-color-13 {
  background-color: var(--red) !important;
  filter: hue-rotate(20deg);
}
.bg-color-14 {
  background-color: var(--orange) !important;
  filter: hue-rotate(20deg);
}
.bg-color-15 {
  background-color: var(--yellow) !important;
  filter: hue-rotate(20deg);
}
.bg-color-15 {
  background-color: var(--blue) !important;
  filter: hue-rotate(40deg);
}
.bg-color-16 {
  background-color: var(--cyan) !important;
  filter: hue-rotate(40deg);
}
.bg-color-17 {
  background-color: var(--green) !important;
  filter: hue-rotate(40deg);
}
.bg-color-18 {
  background-color: var(--violet) !important;
  filter: hue-rotate(40deg);
}
.bg-color-19 {
  background-color: var(--magenta) !important;
  filter: hue-rotate(40deg);
}
.bg-color-20 {
  background-color: var(--red) !important;
  filter: hue-rotate(40deg);
}
`);