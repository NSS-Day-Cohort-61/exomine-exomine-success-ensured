import { getFacilities } from "./database.js";
import { getcurrentGovernorId } from "./database.js";

const facilities = getFacilities();


export const Facilities = () => {
  const governorId = getcurrentGovernorId();
  let html;
  if (governorId === 0) {
    html = "<h4>Please choose a governor before choosing a facility</h4>";
  } else {
    html =
      "<select name='facilities' id='facility-select'><option disabled selected value='0'>Choose a facility...</option>";
    for (const facility of facilities) {
      html += `<option value="${facility.id}">${facility.name}</option>`;
    }
    html += "</select>";
  }
  return html;
};
