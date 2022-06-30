# Systemutveckling_Ramverk

Gruppmedlemmar:

- Wictoria Drefelt
- Amina Hallam
- Fredrik Olsson

Projektarbete - Checkout-React

Beskrivning av projeket
I den här laborationen ska vi i grupp om tre skapa en hemsida i React och Typescript genererat med Vite. Hemsidan ska bestå av en startsida där alla produkter listas, en produktsida där en utvald produkt visas och en utcheckningssida där kunden har möjligheten att slutföra sitt köp. Applikationen kommer att kunna köras via NPM-run dev efter att en NPM-install har körts och kommer endast att köras lokalt. Vi skall använda Material UI som designsystem i er applikation där detta designsystem används på flertalet ställen i applikationen.

Vi ska skapa en e-handel sida som presenterar ett antal olika produkter. Vilka typer av produkter som säljs är valfritt men det ska vara seriöst och välgjort. 

Installation & köra igång projektet: 
 - Projketet körs via Vite -> npm i -> npm run dev


* G-Krav: 

- Det ska vara möjligt att klicka på en produkt för att kunna läsa mer om den.  ✅ 

- Från både startsidan och produktsidan ska det vara möjligt att lägga till produkter i en kundvagn och det ska tydlig framgå för användaren när produkten läggs till i kundvagnen.  ✅ 

- Utcheckningsflödet skall ligga på en egen sida och innehålla delarna Kundvagn, Dina uppgifter, Fraktsätt & Betalsätt.  ✅ 

* Utcheckningsflödet/ Kundvagn:

- Ska lista tillagda produkter (bild & titel), antal, pris och kundvagnens totalpris.  ✅  

- Det ska vara möjligt att uppdatera kundvagnen - dvs ändra antalet av en produkt eller ta bort en produkt helt från kundvagnen. Totalpriset ska alltid uppdateras och vara korrekt.  ✅ 

* Dina uppgifter:

- Ska vara ett formulär där man fyller i namn, mail, telefonnummer och adress.  ✅ 

* Fraktsätt:

- Det ska gå att välja mellan minst tre olika fraktsätt där det tydligt framgår vem som är leverantören, kostnaden för frakten samt leveransdatumet. ✅ 

- Leveransdatumet ska baseras på hur lång tid det tar för en leverantör att leverera din order från det aktuella datumet.  ✅ 

* Betalsätt:

- Det ska även här gå att välja mellan minst tre olika betalsätt (kort & Swish skall finnas).  ✅  

- Varje betalsätt ska innehålla ett formulär för nödvändig information. Fälten i formuläret ska gå att automatisk fyllas i.  ✅ 


- När alla delarna i utcheckningsflödet har fyllts i ska det finns en ”Slutför köp” knapp tillsammans med totalpriset (inklusive frakt och moms).  ✅

- När man väljer att slutföra sitt köp skall detta endast gå om samtlig information är rätt ifylld.  ✅ 

- Vid genomfört köp skall en bekräftelse visas på köpet. Tänk på att det inte ska gå att placera ordern två gånger, även om man navigerar tillbaka på sidan!  ✅


* Krav för godkänt:

1.Git & GitHub har använts  ✅ 

2.Projektmappen innehåller en README.md fil - (läs ovan för mer info)  ✅ 

3.Uppgiften lämnas in innan deadline!  ✅ 

4.Ett designsystem används  ✅ 

5.React Router skall användas som navigation. Exempelvis så skall produkten som visas på produktsidan ska baseras på en parameter i url’en.  ✅ 

6.React context skall användas för hantering av kundvagnen.  ✅ 

7.Samtliga fält ska ha valideringsregler (tips, se Material UI:s dokumentation)  ✅ 

8.Sidan ska vara fullt responsiv  ✅ 

9.Mockade produkter ska ligga i en egen fil och vara typade med ett TS interface  ✅ 


Länk till repositorie: https://github.com/FredrikOlssons/Systemutveckling_Ramverk
