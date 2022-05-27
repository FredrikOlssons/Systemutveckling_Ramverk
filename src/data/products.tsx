import BedroomBattle from '/src/assets/BedroomBattle.jpg'
import BoobBattle from '/src/assets/BoobBattle.jpg'
import CockFighting from 'src/assets/CockFighting.jpg'
import DickheadHoopla from 'src/assets/DickheadHoopla.jpg'
import FiftyDays from 'src/assets/FiftyDays.jpg'
import FloaterSpel from 'src/assets/FloaterSpel.jpg'
import Monopoly from 'src/assets/Monopoly.jpg'
import Puzzle from 'src/assets/Puzzle.jpg'
import ToiletGolf from 'src/assets/ToiletGolf.jpg'



export interface Products {
    id: number
    title: string
    image: string
    description: string
    price: number
}



export const product: Products[] = [
    {
        id: 1, 
        title: "Bedroom Battle", 
        image: BedroomBattle, 
        description: "blabla", 
        price: 249
    }, {
        id: 2, 
        title: "Boob Battle Duellspel", 
        image: BoobBattle, 
        description: "blabla", 
        price: 169
    }, {
        id: 3, 
        title: "Cock Fighting Duellspel", 
        image: CockFighting, 
        description: "blabla", 
        price: 149
    }, {
        id: 4, 
        title: "Dick Head Kastspel", 
        image: DickheadHoopla, 
        description: "blabla", 
        price: 149
    }, {
        id: 5, 
        title: "Fifty Days Of Play", 
        image: FiftyDays, 
        description: "blabla", 
        price: 249
    }, {
        id: 6, 
        title: "Fishing for Floaters Spel", 
        image: FloaterSpel, 
        description: "blabla", 
        price: 129
    }, {
        id: 7, 
        title: "Adult Monopoly", 
        image: Monopoly, 
        description: "blabla", 
        price: 399
    }, {
        id: 8, 
        title: "Världens Minsta Pussel", 
        image: Puzzle, 
        description: "blabla", 
        price: 199
    }, {
        id: 9, 
        title: "Toilet Golf", 
        image: ToiletGolf, 
        description: "blabla", 
        price: 189
    },
]