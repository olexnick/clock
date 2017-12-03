const initialState = {
  modalVisible: false,
  selectedZones: []
};

const Reduser = (state = initialState, action) => {
  switch (action.type) {
    case "clocks/SELECT_ZONE":
      return Object.assign({}, state, {
        selectedZones: action.payload.selectedZones
      });
    case "show/modal":
      return Object.assign({}, state, {
        modalVisible: action.payload.modalVisible
      });
  }
  return state;
};
export default Reduser;
