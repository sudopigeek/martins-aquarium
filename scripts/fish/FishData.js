export const getFish = () => {
    return fishCollection
}

export const getMostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFishArray = []
    for (const obj of fishCollection) {
        if (obj.length % 3 === 0) {
            holyFishArray.push(obj)
        }
    }
    return holyFishArray
}

export const getSoldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiersArray = []
    for (const obj of fishCollection) {
        if (obj.length % 5 === 0) {
            soldiersArray.push(obj)
        }
    }
    return soldiersArray
}

export const getUnworthy = () => {
    // Any fish not a multiple of 3 or 5
    const unworthyArray = []
    for (const obj of fishCollection) {
        if (obj.length % 5 !== 0 && obj.length % 3 !== 0) {
            unworthyArray.push(obj)
        }
    }
    return unworthyArray
}

const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        image: "bluefish.jpg",
        species: "trigger",
        length: 7,
        waterType: "Salt",
        harvestLocation: "Costa Rica"
    },
    {
        name: "Marlin",
        food: "Mealworms",
        image: "orange.jpeg",
        species: "clownfish",
        length: 4,
        waterType: "Salt",
        harvestLocation: "Bahamas"
    },
    {
        name: "Bloat",
        food: "shrimp",
        image: "yellow.jpeg",
        species: "Blow Fish",
        length: 5,
        waterType: "Salt",
        harvestLocation: "Mexico"
    },
    {
        name: "Bruce",
        food: "not fish",
        image: "bruce.jpeg",
        species: "greatWhite",
        length: 130,
        waterType: "salt",
        harvestLocation: "Sydney"
    },
    {
        name: "Gordon",
        food: "Krill",
        image: "pink.jpeg",
        species: "Blowfish",
        length: 3,
        waterType: "Salt",
        harvestLocation: "Asia"
    }
]