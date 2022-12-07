import { getFacilitiesMinerals, getMinerals } from "./database.js";

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
      html += `<li>
      <input type="radio" name="facility-mineral" value="${facilityMineral.id}"/>${facilityMineral.mineralAmount} tons of ${foundMineral.name}
      </li>`;
    }
  }
  html += "</ul>"
  return html;
};
