import React from "react";
import { connect } from "react-redux";
import BlogListItem from "./BlogListItem";
import selectBlogs from "../selectors/blogSelectors";
import Filters from "./Filters";

const BlogList = ({ blogs, uid }) => (
  <div className="bloglist__container">
    <div className="bloglist__scrollbar-removal">
      <div className="bloglist__blogs-wrapper">
        {blogs.map(({ id, title, blog, createdAt }) => (
          <BlogListItem
            uid={uid}
            className="bloglist__blog"
            blogs={blogs}
            id={id}
            key={id}
            title={title}
            blog={blog}
            createdAt={createdAt}
          />
        ))}
      </div>
    </div>

    <div className="bloglist__filters-wrapper">
      <Filters />
    </div>
  </div>
);

const mapStateToProps = state => ({
  blogs: selectBlogs(state.blogPost, state.filters),
  uid: state.auth.uid
});

export default connect(mapStateToProps)(BlogList);
