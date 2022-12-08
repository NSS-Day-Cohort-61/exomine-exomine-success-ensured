import {
  getFacilitiesMinerals,
  getMinerals,
  getCurrentFacilityId,
  getCurrentMineralId,
  getFacilities,
  setCurrentMineralId,
  setSelectedFacilityMineral,
  getCurrentGovernorId,
  getSelectedFacilityMineral,
} from "./database.js";

export const FacilityMinerals = (facilityId) => {
  const facilitiesMinerals = getFacilitiesMinerals();
  const minerals = getMinerals();
  let html = "<ul class='facility-minerals'>";
  for (let facilityMineral of facilitiesMinerals) {
    if (facilityMineral.facilityId === facilityId) {
      let foundMineral;
      for (const mineral of minerals) {
        if (mineral.id === facilityMineral.mineralId) {
          foundMineral = mineral;
        }
      }
      html += "<li>";
      let selectedFacilityMineral = getSelectedFacilityMineral();
      if (selectedFacilityMineral === facilityMineral.id) {
        html += `<input type="radio" name="facility-mineral" value="${facilityMineral.id}" checked/>${facilityMineral.mineralAmount} tons of ${foundMineral.name}</li>`;
      } else {
        html += `<input type="radio" name="facility-mineral" value="${facilityMineral.id}"/>${facilityMineral.mineralAmount} tons of ${foundMineral.name}</li>`;
      }
    }
  }
  html += "</ul>";
  return html;
};

export const SelectedFacilityMineral = () => {
  const governorId = getCurrentGovernorId();
  const facilityId = getCurrentFacilityId();
  const facilities = getFacilities();
  const mineralId = getCurrentMineralId();
  const minerals = getMinerals();
  let chosenMineralName;
  let chosenFacilityName;
  if(governorId !== 0 && facilityId !==0 && mineralId !==0) {
    for (const facility of facilities) {
      if (facility.id === facilityId) {
        chosenFacilityName = facility.name;
      }
    }
    for (const mineral of minerals) {
      if (mineral.id === mineralId) {
        chosenMineralName = mineral.name;
      }
    }
    return `<div id="cart__contents">1 ton of ${chosenMineralName} from ${chosenFacilityName}</div>`;
  }
  else {
    return ``;
  }  
};

document.addEventListener("change", (event) => {
  if (event.target.name === "facility-mineral") {
    const facilityMineralId = event.target.value;
    setSelectedFacilityMineral(parseInt(facilityMineralId));
    // const minerals = getMinerals();
    // let chosenMineralId;
    const facilitiesMinerals = getFacilitiesMinerals();
    for (const facilityMineral of facilitiesMinerals) {
      let tempMineralId = getCurrentMineralId();
      if (facilityMineral.id === parseInt(facilityMineralId)) {
        // chosenMineralId = facilityMineral.mineralId;
        setCurrentMineralId(facilityMineral.mineralId);
      }
    }
  }
});