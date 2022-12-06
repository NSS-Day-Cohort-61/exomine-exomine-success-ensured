const database = {
  coloniesMinerals: [
    {
      id: 1,
      colonyId: 1,
      mineralId: 3,
      mineralAmount: 6,
    },
  ],
  transientState: {},
};

export const setFacility = (facilityId) => {
  database.transientState.selectedFacility = facilityId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const getFacilities = () => {
  return database.facilities.map((f) => ({ ...f }));
};

export const purchaseMineral = () => {
  // Broadcast custom event to entire documement so that the
  // application can re-render and update state
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

// Object builder functions
const objBuilder = () => {
  let obj = {};
  obj.id = database.coloniesMinerals.length + 1;
  obj.colonyId = randomIntBetween(1, 3);
  obj.mineralId = randomIntBetween(1, 6);
  obj.mineralAmount = randomIntBetween(1, 7);
  return obj;
};

const randomIntBetween = (num1, num2) => {
  return Math.floor(Math.random() * num2) + num1;
};

for (let i = 0; i < 9; i++) {
  database.coloniesMinerals.push(objBuilder());
}