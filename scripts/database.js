const database = {
  coloniesMinerals: [
    {
      id: 1,
      colonyId: 1,
      mineralId: 3,
      mineralAmount: 6,
    }, {
      id: 2,
      colonyId: 2,
      mineralId: 2,
      mineralAmount: 1
    }, {
      id: 3,
      colonyId: 3,
      mineralId: 1,
      mineralAmount: 4
    }
  ],
  transientState: {},
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
  currentGovernorId: 0,
  currentFacilityId: 0,
};

export const setFacility = (facilityId) => {
  database.transientState.selectedFacility = facilityId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const setCurrentGovernorId = (id) => {
  database.currentGovernorId = id;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const getCurrentGovernorId = () => {
  return database.currentGovernorId
}

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
    return database.governors.map((g) => ({...g}))
}

export const getFacilitiesMinerals = () => {
  return database.facilitiesMinerals.map((fm) => ({ ...fm }));
};

export const getcurrentGovernorId = () => {
  return database.currentGovernorId;
};

export const getColoniesMinerals = () => {
  return database.coloniesMinerals.map((cm) => ({ ...cm }));
};

export const purchaseMineral = () => {
  // Broadcast custom event to entire documement so that the
  // application can re-render and update state
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

// //Object builder functions
// const objBuilder = () => {
//   let obj = {};
//   obj.id = database.coloniesMinerals.length + 1;
//   obj.colonyId = randomIntBetween(1, 3);
//   obj.mineralId = randomIntBetween(1, 6);
//   obj.mineralAmount = 1;
//   return obj;
// };

// const randomIntBetween = (num1, num2) => {
//   return Math.floor(Math.random() * num2) + num1;
// };

// for (let i = 0; i < 9; i++) {
//   database.coloniesMinerals.push(objBuilder());
// }
