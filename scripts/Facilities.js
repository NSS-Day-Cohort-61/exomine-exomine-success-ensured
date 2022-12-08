import {
  getFacilities,
  getCurrentGovernorId,
  getCurrentFacilityId,
  setCurrentFacilityId,
  setCurrentMineralId,
} from "./database.js";

const facilities = getFacilities();

export const Facilities = () => {
  const governorId = getCurrentGovernorId();
  const facilityId = getCurrentFacilityId();
  let html;
  if (governorId === 0) {
    html = "<select disabled name='facilities' id='facility-select'><option disabled selected value='0'>Choose a facility...</option>";
  } else {
    html =
      "<select name='facilities' id='facility-select'><option disabled selected value='0'>Choose a facility...</option>";
  }
  for (const facility of facilities) {
    if (facility.id === facilityId) {
      html += `<option selected value="${facility.id}">${facility.name}</option>`;
    } else {
      html += `<option value="${facility.id}">${facility.name}</option>`;
    }
  }
  html += "</select>";

  return html;
};

document.addEventListener("change", (event) => {
  if (event.target.id === "facility-select") {
    let clickedFacilityId = event.target.value;
    setCurrentFacilityId(parseInt(clickedFacilityId));
    setCurrentMineralId(0);
  }
});

export const getCurrentFacilityName = () => {
  const currentFacilityId = getCurrentFacilityId();
  if (currentFacilityId !== 0) {
    let currentFacilityName;
    for (let facility of facilities) {
      if (facility.id === currentFacilityId) {
        currentFacilityName = facility.name;
      }
    }
    return `<h2>Facility Minerals for ${currentFacilityName}</h2>`;
  } else {
    return `<h2>Facility Minerals</h2>`;
  }
};
