
export interface Delivery {
    id: number
    title: string
    description: string
    price: number
    estimatedDelivery: number
}

export const delivery: Delivery[] = [
    {
        id: 1,
        title: "Schenker",
        description: "Leverans via Schenker",
        price: 49,
        estimatedDelivery: 2
    }, {
        id: 2,
        title: "Hemleverans",
        description: "Hemleverans",
        price: 39,
        estimatedDelivery: 4
    }, {
        id: 3,
        title: "DHL",
        description: "Leverans via DHL",
        price: 0,
        estimatedDelivery: 7
    }
]