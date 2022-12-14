
import { Governors, getCurrentColonyName, getMineralByGov } from "./Governors.js";
import { Facilities, getCurrentFacilityName } from "./Facilities.js";
import { FacilityMinerals, SelectedFacilityMineral } from "./FacilityMinerals.js"
import { getCurrentFacilityId, purchaseMineral } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target;
        if(itemClicked.id === "purchaseButton") {
            purchaseMineral();
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
                ${getMineralByGov()}
            </div>
        </div>
        <div id="orders">
            <div id="orders__left">
                ${getCurrentFacilityName()}
                ${FacilityMinerals(getCurrentFacilityId())}
                
            </div>
            <div id="orders__right">
                <h2>Space Cart</h2>
                ${SelectedFacilityMineral()}
                <button id="purchaseButton">Purchase Mineral</button>
            </div>
        </div>`;
};