import { getGovernors } from "./database.js";

const governors = getGovernors();

export const Governors = () => {
  let html = "<label for='governor-select'>Choose a governor</label>";
  html +=
    "<select name='governors' id='governor-select'><option disabled selected value='0'>Choose a Governor...</option>";
  for (const governor of governors) {
    html += `<option value="${governor.id}">${governor.name}</option>`;
  }
  html += "</select>";
  return html;
};
