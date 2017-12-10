import history from "../utils/history.js";
import store from "../store/store";

export function selectZone({ zone, selectedZones }) {
  return dispatch => {
    let zoneWithId = {
      id: new Date().getTime(),
      gmt: zone.gmt,
      name: zone.name
    };
    console.log("zoneWithId", zoneWithId);
    dispatch({
      type: "clocks/SELECT_ZONE",
      payload: {
        selectedZones: selectedZones.concat([zoneWithId])
      }
    });
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
export function deleteZones(id) {
  return dispatch => {
    const state = store.getState();
    dispatch({
      type: "clocks/DELETE_ZONE",
      payload: {
        selectedZones: state.selectedZones.filter(z => {
          return z.id !== id;
        })
      }
    });
  }
}
