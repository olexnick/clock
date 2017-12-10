const initialState = {
  selectedZones: []
};

const Reduser = (state = initialState, action) => {
  switch (action.type) {
    case "clocks/SELECT_ZONE":
      return Object.assign({}, state, {
        selectedZones: action.payload.selectedZones
      });
    case "clocks/SORT_ZONES":
      return Object.assign({}, state, {
        selectedZones: action.payload.selectedZones
      });
    case "clocks/DELETE_ZONE":
      return Object.assign({}, state, {
        selectedZones: action.payload.selectedZones
      });
  }
  return state;
};
export default Reduser;
