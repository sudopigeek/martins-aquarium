/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module
import { getLocations } from './LocationData.js'
import { Location } from './Location.js'

export const LocationList = () => {

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".locationList")
    const locations = getLocations()
    let locationHTML = "";
    // Add to the existing HTML in the content element
    for (const i of locations) {
        locationHTML += Location(i)
    }
    contentElement.innerHTML += `${locationHTML}`
}