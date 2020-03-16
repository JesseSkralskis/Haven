
export default (state = {}, action) => {
  switch (action.type) {
    case "GET_ZIP":
      return {
        
      };
      case "TEST":
          return {
              property: action.number
          }

    default:
      return state;
  }
};
