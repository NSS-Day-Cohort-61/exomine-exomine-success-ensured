import { getGovernors, setCurrentGovernorId } from "./database.js";

export const Governors = () => {
  const governors = getGovernors();
  let html = "<select name='governors' id='governor-select'><option disabled selected value='0'>Choose a Governor...</option>";
  for (const governor of governors) {
    html += `<option value="${governor.id}">${governor.name}</option>`;
  }
  html += "</select>";
  return html;
};

document.addEventListener("change", (event) => {
  if (event.target.id === 'governor-select') {
    let clickedGovernorId = event.target.value;
    setCurrentGovernorId(clickedGovernorId);
  }
})