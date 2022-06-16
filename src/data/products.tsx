import BedroomBattle from '../assets/BedroomBattle.jpg'
import BoobBattle from '../assets/BoobBattle.jpg'
import CockFighting from '../assets/CockFighting.jpg'
import DickheadHoopla from '../assets/DickheadHoopla.jpg'
import FiftyDays from '../assets/FiftyDays.jpg'
import FloaterSpel from '../assets/FloaterSpel.jpg'
import Monopoly from '../assets/Monopoly.jpg'
import Puzzle from '../assets/Puzzle.jpg'
import ToiletGolf from '../assets/ToiletGolf.jpg'


export interface Product {
    id: number
    title: string
    image: string
    description: string
    price: number
}

export const products: Product[] = [
     {
        id: 1, 
        title: "Sovrumskampen", 
        image: BedroomBattle, 
        description: "Lajva tillsammans med hela familjen och ikläd dig rollen som den ståtliga badvakten eller den mystiska massösen och ta dig an utmaningarna på ett av de 200 olika uppdragskorten. Ha en spelkväll tillsammans med familjen utan att ens gå upp ur sängen.", 
        price: 249
    }, {
        id: 2, 
        title: "Uppblåsbart kuddkrig - rund", 
        image: BoobBattle, 
        description: "Har du också alltid velat brösta upp dig ut och saknar du kuddkrigen från barndomen? I det här roliga duellspelet fäster ni varsitt par karaktärshöjande kuddar på kroppen och bonkar på varandra tills en av er tappar andan. Men kom ihåg, inga händer tillåtna! Detta är en kamp där överkroppskontroll och inte MeToo ska avgöra! (Obs. inga platshållare tillåtna, byglar kan allvarligt skada produkten)", 
        price: 169
    }, {
        id: 3, 
        title: "Uppblåsbart kuddkrig - avlång.", 
        image: CockFighting, 
        description: 'Är farmor stinn efter julmaten? Kanske känner du att hon behöver piggas upp med en liten dask i ansiktet? Eller känner du att du behöver visa svärfar hur hård och stolt du är? Ta fram ditt vapen under bältet och utmana honom i en ståndaktig tornering och se vem som egentligen är "man of the house"', 
        price: 149
    }, {
        id: 4, 
        title: "Farbror Richard's huvudsak", 
        image: DickheadHoopla, 
        description: 'I detta spelet är avgörande att vara ett riktigt "Dickhead". Försök att penetrera ringarna som kommer flygande åt ditt håll. Exakt som en krogrunda men här har du faktiskt chansen att scora', 
        price: 149
    }, {
        id: 5, 
        title: "50 dagar av spel", 
        image: FiftyDays, 
        description: 'En långkörare av spel som kan utspelas både i vardagsrummet eller i "kammaren". Spelet varar som titeln säger i 50 dagar så se till att kancellera alla planer under semestern och plocka ut komp-timmarna för ultimat spelklimax', 
        price: 249
    }, {
        id: 6, 
        title: "Fiska efter flytare", 
        image: FloaterSpel, 
        description: "Önskar du också att dina barn lär sig lite om friluftsliv och miljötänk? Här kan de roa sig i flera timmar med att öva sig på att fiska ifrån badkaret och samtidigt lära sig att städa. Win - win", 
        price: 129
    }, {
        id: 7, 
        title: "Populära familjespelet Monopol", 
        image: Monopoly, 
        description: "En riktig gammal klassiker! Hela familjens favorit där du är ägare av röda hotell i skumma kvarter och tar betalt av dina medspelare. Passa dig bara så att du inte åker i fängelse eller hamnar på ett hotell som gör dig bankrutt", 
        price: 399
    }, {
        id: 8, 
        title: 'Farmors "favorit"', 
        image: Puzzle, 
        description: "Ett perfekt litet sidoprojekt för din svärmor med dålig syn. Sätt henne på att lösa detta pussel så slipper du prata med henne på hela kvällen", 
        price: 199
    }, {
        id: 9, 
        title: "Klosett-golf", 
        image: ToiletGolf, 
        description: "Även de bästa spelkvällar behöver sina pauser. Du som har tröttnat på att räkna kakelplattor i badrummet kan nu fortsätta spelkvällen utan att behöva knipa ihop", 
        price: 189
    }, 
]
