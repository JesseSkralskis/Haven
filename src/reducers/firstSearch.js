const defaultData = {
  firstSearch: [],
  cordinates: {}
};

const firstSearch = (state = defaultData, action) => {
  switch (action.type) {
    case "Get_API_DATA":
      return {
        firstSearch: action.apiData,
        cordinates: action.cordinates
      };

    default:
      return state;
  }
};

export { firstSearch as default };
