const database = {
  coloniesMinerals: [
    {
      id: 1,
      colonyId: 1,
      mineralId: 3,
      mineralAmount: 6,
    },
    {
      id: 2,
      colonyId: 2,
      mineralId: 2,
      mineralAmount: 1,
    },
    {
      id: 3,
      colonyId: 3,
      mineralId: 1,
      mineralAmount: 4,
    },
    {
      id: 4,
      colonyId: 3,
      mineralId: 1,
      mineralAmount: 5,
    },
  ],
  transientState: {
    id: 1,
    governorId: 0,
    facilityId: 0,
    mineralId: 0,
    mineralAmount: 1,
  },
  minerals: [
    {
      id: 1,
      name: "Iron",
    },
    {
      id: 2,
      name: "Chromium",
    },
    {
      id: 3,
      name: "Molybdenum",
    },
    {
      id: 4,
      name: "Radium",
    },
    {
      id: 5,
      name: "Neon",
    },
    {
      id: 6,
      name: "Lithium",
    },
  ],
  governors: [
    {
      id: 1,
      name: "Benny Profane",
      status: true,
      colonyId: 1,
    },
    {
      id: 2,
      name: "Tyrone Slothrop",
      status: true,
      colonyId: 1,
    },
    {
      id: 3,
      name: "Chevrolette McAdoo",
      status: true,
      colonyId: 2,
    },
    {
      id: 4,
      name: "Rachel Owlglass",
      status: true,
      colonyId: 3,
    },
    {
      id: 5,
      name: "Oedipa Maas",
      status: true,
      colonyId: 3,
    },
  ],
  colonies: [
    {
      id: 1,
      name: "Earth",
    },
    {
      id: 2,
      name: "Mars",
    },
    {
      id: 3,
      name: "Europa",
    },
  ],
  facilities: [
    {
      id: 1,
      name: "Io",
      status: true,
    },
    {
      id: 2,
      name: "Ganymede",
      status: true,
    },
    {
      id: 3,
      name: "Titan",
      status: true,
    },
  ],
  facilitiesMinerals: [
    {
      id: 1,
      facilityId: 1,
      mineralId: 1,
      mineralAmount: 3,
    },
    {
      id: 2,
      facilityId: 1,
      mineralId: 2,
      mineralAmount: 5,
    },
    {
      id: 3,
      facilityId: 1,
      mineralId: 3,
      mineralAmount: 4,
    },
    {
      id: 4,
      facilityId: 2,
      mineralId: 3,
      mineralAmount: 6,
    },
    {
      id: 5,
      facilityId: 2,
      mineralId: 2,
      mineralAmount: 2,
    },
    {
      id: 6,
      facilityId: 3,
      mineralId: 1,
      mineralAmount: 1,
    },
    {
      id: 7,
      facilityId: 3,
      mineralId: 2,
      mineralAmount: 5,
    },
    {
      id: 8,
      facilityId: 3,
      mineralId: 3,
      mineralAmount: 7,
    },
  ],
  selectedFacilityMineral: 0,
};

export const setFacility = (facilityId) => {
  database.transientState.selectedFacility = facilityId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const setCurrentGovernorId = (id) => {
  database.transientState.governorId = id;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const setCurrentFacilityId = (id) => {
  database.transientState.facilityId = id;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const setCurrentMineralId = (id) => {
  database.transientState.mineralId = id;
  // document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const setSelectedFacilityMineral = (id) => {
  database.selectedFacilityMineral = id;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const getFacilities = () => {
  return database.facilities.map((f) => ({ ...f }));
};

export const getMinerals = () => {
  return database.minerals.map((m) => ({ ...m }));
};

export const getColonies = () => {
  return database.colonies.map((c) => ({ ...c }));
};

export const getGovernors = () => {
  return database.governors.map((g) => ({ ...g }));
};

export const getFacilitiesMinerals = () => {
  return database.facilitiesMinerals.map((fm) => ({ ...fm }));
};

export const getCurrentGovernorId = () => {
  return database.transientState.governorId;
};

export const getCurrentFacilityId = () => {
  return database.transientState.facilityId;
};

export const getCurrentMineralId = () => {
  return database.transientState.mineralId;
};

export const getColoniesMinerals = () => {
  return database.coloniesMinerals.map((cm) => ({ ...cm }));
};

export const getSelectedFacilityMineral = () => {
  return database.selectedFacilityMineral;
};

export const purchaseMineral = () => {
  // Broadcast custom event to entire documement so that the
  // application can re-render and update state
  document.dispatchEvent(new CustomEvent("stateChanged"));
};
