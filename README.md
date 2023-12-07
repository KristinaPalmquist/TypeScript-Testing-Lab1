# TypeScript-Testing-Lab1

course work

TypeScript & Testing
IT-Högskolan Stockholm 2023

Inlämningsuppgift
Introduktion
Inlämningsuppgiften består av ett antal mindre uppgifter. I varje uppgift ska ni skriva ett testfall
och sedan kod som uppfyller testfallet. Ni ska alltså arbeta enligt TDD metoden.
Krav
Skriv testfall först
Använd typescript (strict, noImplicitAny och inga any)
Använd beskrivande namn på funktioner, parametrar och variabler
Inlämning
Ladda upp länk till publikt Github-repo på ITHS-distans senast fredag den 22/12 kl 23:59.
Komma igång
För att sätta upp er miljö där ni kan skriva tester / funktioner. Följ nedanstående steg:
Skapa en ny katalog
Öppna katalogen i VSCode
Öppna terminalen och skriv följande:
npm init
Klicka enter tills alla frågor är besvarade
Installera paket för typescript:
npm i --save-dev typescript
npm i --save-dev ts-node
Skapa tsconfig.json:
npx tsc --init
Installera paket för testning:
npm i --save-dev jest
npm i --save-dev @types/jest
npm i --save-dev ts-jest
Skapa jest.config.js:
npx ts-jest config:init
Gå in i tsconfig.json:
Sätt noImplicitAny till true
Uppdatera package.json
"scripts": {
"test": "jest",
"test:watch": "jest --watchAll"
},
Nu är du redo att skriva ditt första testfall
Uppgifter

1. Validate email
   Skriv testfall till, och implementera, en funktion som validerar en e-postadress:
   validateEmail(”jonatan@gmail.com”) -> true
   validateEmail(”jonatan@gmail”) -> false
   validateEmail(”jonatan.com”) -> false
2. Validate ZIP
   Skriv testfall till, och implementera, en funktion som validerar ett postnummer som kommer in
   som en sträng:
   validateZip(”12345”) -> true
   validateZip(”1234”) -> false
   validateZip(”123456”) -> false
   validateZip(”abcde”) -> false
3. Skapa Heading
   Skriv testfall till, och implementera, en funktion som ska skapa HTML- rubriker. Exempel:
   makeHeading("Hello", 1) → "<h1>Hello</h1>"
   makeHeading("Next level", 2) → "<h2>Next level</h2>"
4. Formatera Pris
   4.a.
   Skriv testfall till, och implementera, en funktion som avrundar tal. Du bygger ett plugin till en
   webbshop som ska ta reda på priserna för olika produkter. Priserna kommer från databasen,
   men eftersom det är en internationell webbshop och priserna kan omvandlas mellan olika
   valutor, kan man få priser med många decimaler. Du vill att webbshoppen ska visa priset med
   två decimaler och lägga på svensk valutasymbol efteråt. Priserna måste avrundas uppåt, så
   inte affären förlorar pengar. Exempel:
   roundPrice(232.10542) → "232.11 SEK"
   roundPrice(14) → "14.00 SEK"
   roundPrice(1024.2048) → "1024.20 SEK"
   4.b.
   Utöka roundPrice så att den tar emot vilken valuta den skriver ut (t.ex. NOK, USD istället för
   bara SEK). Börja med att skriva testfall. Ändringen ska vara bakåtkompatibel så alla gamla
   testfall ska fungera utan att de ändras
   4.c.
   Man brukar skriva ut olika valutor på olika sätt, t.ex:
   USD brukar stå före beloppet (USD 10)
   kr brukar stå efter (10kr)
   Skriv tester och uppdatera funktionen så att den tar emot ett pattern som beskriver hur beloppet
   ska returneras. Exempel:
   roundPrice(232.10542, '%PRICE% kr') → "232.11 kr"
   roundPrice(14, '$%PRICE%') → "$14.00"
   roundPrice(1024.2048, 'USD %PRICE%') → "USD 1024.20 SEK"
5. Kolla om lowercase
   Skriv funktionen isLowerCase(input: string) som returnerar true om input endast innehåller
   lowercase-bokstäver och false annars. Skriv tester först!
6. Primtal
   Skriv tester först och en funktion som testar om ett tal är ett primtal.
7. Saknas (?)
8. Genitiv
   Skriv tester först och en funktion som tar emot ett namn och returnerar genitivformen av
   namnet. Exempel:
   getGenitive("Jonatan") => Jonatans
   getGenitive("Anna") => Annas
   getGenitive("Claes") => Claes
   getGenitive("Hampus") => Hampus
   getGenitive("Johanna") => Johannas
9. Async
   9.a.
   Skriv ett test och skapa funktionen getUsers som i en promise returnerar array med användar-objekt
   9.b.
   Skriv ett test och skapa funktionen getGroups som i en promise returnerar array med grupp-objekt
