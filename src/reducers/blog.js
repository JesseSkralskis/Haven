const defaultBlogState = [];

export default (state = defaultBlogState, action) => {
  switch (action.type) {
    case "ADD_BLOG_ENTRY":
      return [...state, action.blogPost];

    case "DELETE_BLOG_ENTRY":
      return state.filter(({ id }) => id !== action.id);

    case "EDIT_BLOG_ENTRY":
      return state.map(blog => {
        console.log(`blogid ${blog.id} action ${action.updates}`);
        if (blog.id === action.id) {
          return {
            ...blog,
            ...action.updates
          };
        } else {
          return blog;
        }
      });

    case "SET_BLOGS":
      return action.blogs;

    default:
      return state;
  }
};
