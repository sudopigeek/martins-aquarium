import { getTips } from './TipData.js'
import { Tip } from './Tip.js'

export const TipList = () => {
    const contentElement = document.querySelector(".tipList")
    const tips = getTips()
    let tipHTML = "";
    // Add to the existing HTML in the content element
    for (const i of tips) {
        tipHTML += Tip(i)
    }
    contentElement.innerHTML += `${tipHTML}`
}