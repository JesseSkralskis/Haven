import database from "../firebase/firebase";

const king = process.env.REACT_APP_KING_KEY;

export const addBlogEntry = blogPost => ({
  type: "ADD_BLOG_ENTRY",
  blogPost
});

export const startAddBlogEntry = (blogData = {}) => {
  console.log("called");

  return (dispatch, getState) => {
    const { title = "", blog = "", createdAt = 0 } = blogData;
    const uid = getState().auth.uid;
    console.log(`@@@@@@@@@@@@ getting this id ${uid}`);
    const blogToDataBase = { title, blog, createdAt };
    database
      .ref(`users/${uid}/blogs`)
      .push(blogToDataBase)
      .then(ref => {
        dispatch(
          addBlogEntry({
            id: ref.key,
            ...blogToDataBase
          })
        );
      });
  };
};

export const deleteEntry = id => ({
  type: "DELETE_BLOG_ENTRY",
  id
});

export const startDelete = id => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`/users/${uid}/blogs/${id}`)
      .remove()
      .then(snapshot => {
        dispatch(deleteEntry(id));
      });
  };
};

export const editBlog = (id, updates) => ({
  type: "EDIT_BLOG_ENTRY",
  id,
  updates
});

export const startEditBlog = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`/users/${uid}/blogs/${id}`)
      .update(updates)
      .then(snapshot => {
        dispatch(editBlog(id, updates));
      });
  };
};

export const setBlogs = blogs => ({
  type: "SET_BLOGS",
  blogs
});

export const startSetBlog = () => {
  return dispatch => {
    return database
      .ref(`users/${king}/blogs`)
      .once("value")
      .then(snapshot => {
        const blogs = [];
        snapshot.forEach(childSnapShot => {
          blogs.push({
            id: childSnapShot.key,
            ...childSnapShot.val()
          });
        });

        dispatch(setBlogs(blogs));
      });
  };
};
