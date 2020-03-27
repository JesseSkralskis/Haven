const defaultIds = {
  propId: "",
  listId: "",
    propStatus: "",
    lat: "",
  lon: "",
};

const idsReducer = (state = defaultIds, action) => {
  switch (action.type) {
    case "SET_IDS":
      return {
        propId: action.propId,
        listId: action.listId,
          propStatus: action.propStatus,
          lat: action.lat,
          lon: action.lon
        };
  

    default:
      return state;
  }
};

export { idsReducer as default };
