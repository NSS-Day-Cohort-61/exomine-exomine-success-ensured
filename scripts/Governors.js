
import { getColonies, getCurrentGovernorId, getColoniesMinerals, getGovernors, setCurrentGovernorId, getMinerals, setCurrentColonyId, getFacilitiesMinerals } from "./database.js";

const governors = getGovernors();
const colonies = getColonies();
const minerals = getMinerals()


export const Governors = () => {
  const currentGovId = getCurrentGovernorId()
  let html = "<select name='governors' id='governor-select'><option disabled selected value='0'>Choose a Governor...</option>";
  for (const governor of governors) {
    if (currentGovId === governor.id) {
      html += `<option selected value="${governor.id}">${governor.name}</option>`;
    } else {
      html += `<option value="${governor.id}">${governor.name}</option>`;
    }
  }
  html += "</select>";
  return html;
}

document.addEventListener("change", (event) => {
  if (event.target.id === 'governor-select') {
    let clickedGovernorId = event.target.value;
    let clickedColony;
    let clickedGovernor;
    for (const governor of governors) {
      if (governor.id === parseInt(clickedGovernorId)) {
        clickedGovernor = governor
      }
    }
    for (const colony of colonies) {
      if (colony.id === clickedGovernor.colonyId) {
        clickedColony = colony;
      }
    }
    setCurrentGovernorId(parseInt(clickedGovernorId));
    setCurrentColonyId(clickedColony.id)
  }
})

export const getCurrentColonyName = () => {
  const currentGovId = getCurrentGovernorId();
  if (currentGovId === 0) {
    return "<h2>Colony Minerals</h2>"
  }
  else {
    for (const governor of governors) {
      if (governor.id === parseInt(currentGovId))
        for (const colony of colonies) {
          if (colony.id === governor.colonyId) {
            return `<h2>${colony.name} Minerals</h2`
          }
        }
    }
  }
}

export const getMineralByGov = () => {
  const currentGovId = getCurrentGovernorId();
  const coloniesMinerals = getColoniesMinerals();
  const govColoniesMinerals = [];
  if (currentGovId === 0) {
    return "<h4>Choose a Governor to view his or her Colony's available Minerals</h4>"
  }
  else {
    let html = "<ul>"
    let mineralCount = 0
    let mineralName = ""
    for (const governor of governors) {
      if (governor.id === parseInt(currentGovId)) {
        for (const colony of colonies) {
          if (colony.id === governor.colonyId) {
            for (const colonyMinerals of coloniesMinerals) {
              if (colonyMinerals.colonyId === colony.id) {
                govColoniesMinerals.push(colonyMinerals);
              }
            }
          }
        }
      }
    }
    for (const mineral of minerals) {
      mineralName = mineral.name;
      for(const govColonyMinerals of govColoniesMinerals) {
        if (govColonyMinerals.mineralId === mineral.id) {
          mineralCount += govColonyMinerals.mineralAmount;
        }
      }
      if(mineralCount != 0) {
        html += `<li>${mineralCount} tons of ${mineralName}</li>`
        mineralCount = 0;
      }
    }
    return html;
  }
}

