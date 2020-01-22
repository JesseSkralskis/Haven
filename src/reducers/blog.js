import moment from "moment";
import uuid from "uuid";

const defaultBlogState = [];

export default (state = defaultBlogState, action) => {

    switch (action.type) {
        case "ADD_BLOG_ENTRY":
            return [...state, action.blogPost]
            
       


        default: return state;
    }
    
}
