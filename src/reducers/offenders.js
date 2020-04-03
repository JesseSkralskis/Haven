const offendersDefault = {
  offenders: []
};

const offenders = (state = offendersDefault, action) => {
  switch (action.type) {
    case "ADD_OFFENDERS_LAT_LON":
      return {
        offenders: action.offenders
      };

    default:
      return state;
  }
};

export { offenders as default };
