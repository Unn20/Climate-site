# ClimateSite

![Logo projektu, góra lodowa z podpisem ClimateSite](src/assets/img/icons/logo3.png)

## Opis projektu

Projekt kryjący się pod nazwą ClimateSite to aplikacja webowa, mająca na celu edukowanie odwiedzających ją użytkowników o ochronie środowiska. Robi to poprzez przedstawianie danych klimatycznych i próbę zainteresowania odwiedzającego tematem, co powinno spowodować jego dalsze badania w kierunku ekologii i ochrony środowiska.

Aplikacja powstała jako projekt inżynierski 4 studentów 7-ego semestru **Informatyki** na wydziale **Informatyki i Telekomunikacji** na **Politechnice Poznańskiej**.  
Wyżej wspomnieni pierwotni twórcy projketu to:

- Maciej Leszczyk,
- Kamil Kowalczyk,
- Paweł Kryczka,
- Krzysztof Charlikowski.

Pod przewodnictwem promotora prof. PP dr hab. mgr. inż. Macieja Zakrzewicza.

### Technologia

![Logo technologi Angular](src/assets/img/icons/angular-logo.png)

Projekt zostały wykonany z wykorzystaniem popularnego frame-worka **Angular**. (Wspieranego przez m. in. Google)
Style do poszczególnych komponentów i do całości aplikacji są napisane w roszerzeniu języka **CSS** o nazwie **Sass**. Stosuje on rozszerzenia arkuszy stylów ```*.scss``` i rozszerza możliwości standardowego css o m. in.:

- Hierarchiczne deklaracji styli
- Możliwość deklarowania zmiennych
- Wykorzystanie arkuszy w innych arkuszach poprzez dyrektywę **@use**

![Logo technologi Sass](src/assets/img/icons/sass-logo-s.png)

## Budowanie i uruchamianie
### Wymagania

- [NPM](https://www.npmjs.com/)
- [node.js](https://nodejs.org/en/)

Do zbudowania projektu potrzebny będzie **NPM** (node package manager).
Można go pobrać z oficjalnej strony narzędzia.

Drugim wymaganym narzędziem będzie **Node.js**, również dostępny do pobrania z oficjalnej strony.

### Budowanie
Aby zbudować projekt należy uruchomić konsolę i przejść do nadrzędnego folderu z aplikacją (Climate-Site-Frontend/).
Następnie w folderze uruchomić następujące komendy.
```
npm install
npm audit fix
```
### Uruchamianie
```
ng serve
```
Po wpisaniu powyższej komendy aplikacja zostanie uruchomiona (domyślnie na porcie 4200) w trybie wykrywającym zmiany i automatycznie przebuduję aplikację gdy wykryję nowy kod .
Aby zobaczyć aplikację należy w przeglądarce wpisać adres http://localhost:4200.

### Testowanie
Aby uruchmoić testy jednostkowe należy wpisać poniższe polecenie, spowoduje to otwarcie nowego okna przeglądarki w którym pokaże się interfejs testowania w bibliotece Karma.
```
ng test
```
