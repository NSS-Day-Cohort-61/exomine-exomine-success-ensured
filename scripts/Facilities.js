import { getFacilities } from "./database.js";

const facilities = getFacilities();

export const Facilities = () => {
  let html = "<label for='facility-select'>Choose a facility</label>";
  html +=
    "<select name='facilities' id='facility-select'><option disabled selected value='0'>Choose a facility...</option>";
  for (const facility of facilities) {
    html += `<option value="${facility.id}">${facility.name}</option>`;
  }
  html += "</select>";
  return html;
};