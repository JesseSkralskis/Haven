export const setTextFilter = (text) => ({
    type: "SET_TEXT_FILTER",
    text
});


export const sortByOldest = () => ({
    type: "SORT_BY_OLDEST"
   

});

export const sortByRecent = () => ({
    type: "SORT_BY_RECENT"
   
});

// export const sortByKeyword = () => ({
//     type: "SORT_BY_KEYWORD_BLOG"
// });

export const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
});


   export const setEndDate = (endDate) => ({
       type: "SET_END_DATE",
       endDate
   }); 
