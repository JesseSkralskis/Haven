import React from "react";
import Header from "./Header";
import BlogForm from "./BlogForm";
import { connect } from "react-redux";
import { startEditBlog } from "../actions/blog";

export function EditEntry({ startEditBlog, blog, match }) {
  const onSubmit = (id, blogFromForm) => {
    startEditBlog(id, blogFromForm);
  };

  return (
    <div>
      <Header />
      <BlogForm id={match.params.id} editedBlog={blog} onSubmit={onSubmit} />
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  startEditBlog: (id, blog) => dispatch(startEditBlog(id, blog))
});

const mapStateToProps = (state, props) => {
  return {
    //find allows us to look through an array looking for a single item
    blog: state.blogPost.find(blog => {
      return blog.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEntry);
