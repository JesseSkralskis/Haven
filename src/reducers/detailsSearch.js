const defaultDetails = {};

const detailsSearch = (state = defaultDetails, action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return action.details;

    default:
      return state;
  }
};

export { detailsSearch as default };
