import { Governors, getCurrentColonyName, getColonyByGov } from "./Governors.js";
import { Facilities, getCurrentFacilityName } from "./Facilities.js";
import { FacilityMinerals } from "./FacilityMinerals.js"
import { getCurrentFacilityId } from "./database.js"

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
        <h1 id="main__header">Exomine</h1>
        <div id="inventory">
            <div id="inventory__left">
                <h3>Choose a Governor</h3>
                    ${Governors()}
                <h3>Choose a Facility</h3>
                    ${Facilities()}
                    
            </div>
            <div id="inventory__right">
                ${getCurrentColonyName()}
                ${getColonyByGov()}
            </div>
        </div>
        <div id="orders">
            <div id="orders__left">
                ${getCurrentFacilityName()}
                ${FacilityMinerals(getCurrentFacilityId())}
                
            </div>
            <div id="orders__right">
                <h2>Space Cart</h2>
                <button id="purchaseButton">Purchase Mineral</button>
            </div>
        </div>`;
};