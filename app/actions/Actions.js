import history from "../utils/history.js";

export function selectZone({ zone, selectedZones }) {
  return {
    type: "clocks/SELECT_ZONE",
    payload: {
      selectedZones: selectedZones.concat(zone)
    }
  };
}

export function sortZones(zones, typeSort) {
  return dispatch => {
    zones.sort(function(a, b) {
      if (typeSort === "east") return a.gmt - b.gmt;
      if (typeSort === "west") return b.gmt - a.gmt;
    });

    dispatch({
      type: "clocks/SORT_ZONES",
      payload: {
        selectedZones: zones
      }
    });
  };
}

export function showDialogs(val) {
  return {
    type: "show/modal",
    payload: {
      modalVisible: val
    }
  };
}
