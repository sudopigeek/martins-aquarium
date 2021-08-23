/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module
import { getFish } from './FishData.js'
import { getMostHolyFish } from './FishData.js'
import { getSoldierFish } from './FishData.js'
import { getUnworthy } from './FishData.js'
import { Fish } from './Fish.js'

export const FishList = () => {
    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".fishList")
    const fishes = getFish()
    const mostHoly = getMostHolyFish()
    const soldier = getSoldierFish()
    const unworthy = getUnworthy()
    let fishHTML = "";
    // Add to the existing HTML in the content element
    for (const i of mostHoly) {
        fishHTML += Fish(i)
    }
    for (const i of soldier) {
        fishHTML += Fish(i)
    }
    for (const i of unworthy) {
        fishHTML += Fish(i)
    }
    contentElement.innerHTML += `${fishHTML}`
}