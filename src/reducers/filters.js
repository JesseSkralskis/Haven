import moment from "moment";

const filtersDefaultState = {
  text: "",
  sortBy: "recent",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
};

export default (state = filtersDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };

    case "SORT_BY_RECENT":
      return {
        ...state,
        sortBy: "recent"
      };

    case "SORT_BY_OLDEST":
      return {
        ...state,
        sortBy: "oldest"
      };

      

      case "SET_START_DATE":
          return {
              ...state,
              startDate:action.startDate
          }

      case "SET_END_DATE":
          return {
              ...state,
              endDate: action.endDate
          }

    default:
      return state;
  }
};
