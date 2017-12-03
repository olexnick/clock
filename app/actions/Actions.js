import history from "../utils/history.js";


export function selectZone({zone, selectedZones}){
  return {
    type: "clocks/SELECT_ZONE",
    payload: {
      selectedZones: selectedZones.concat([zone])
    }
  }
}

export function showDialogs(val){
  return {
    type: "show/modal",
    payload: {
      modalVisible: val
    }
  }
}
export function Globalgmt(val){
  return {
    type: "Globalgmt/modal",
    payload: {
      modalVisible: val
    }
  }
}
export function GlobalEnding(val){
  return {
    type: "GlobalEnding/modal",
    payload: {
      modalVisible: val
    }
  }
}
