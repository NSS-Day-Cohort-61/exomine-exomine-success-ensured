import { Governors } from "./Governors.js"
import { Facilities } from "./Facilities.js"

document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target;
        if(itemClicked.id === "purchaseButton") {
            addCustomOrder();
        }
    }
)

export const Exomine = () => {
    return `
        <h1>Exomine</h1>
        <div id="inventory">
            <div id="inventory__left">
                <h3>Choose a Governor</h3>
                    ${Governors()}
                <h3>Choose a Facility</h3>
                    ${Facilities()}
                    
            </div>
            <div id="inventory__right">
                <h2>{COLONYNAME Minerals}</h2>

            </div>
        </div>
        <div id="orders">
            <div id="orders__left">
                <h2>Facility Minerals for FACILITYNAME</h2>
                
            </div>
            <div id="orders__right">
                <h2>Space Cart</h2>
                <button id="purchaseButton">Purchase Mineral</button>
            </div>
        </div>`
}