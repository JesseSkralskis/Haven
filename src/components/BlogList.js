import React from "react";
import { connect } from "react-redux";
import BlogListItem from "./BlogListItem";
import selectBlogs from "../selectors/blogSelectors";
import Filters from "./Filters";
import { Link } from "react-router-dom";


export function BlogList({ blogs }) {
  


  return (
    <div className="bloglist__container">
      <div className="bloglist__container--secondary">
        <Filters />
      </div>
      {blogs.map(({ id, title, blog, createdAt }) => (
        <BlogListItem
          blogs={blogs}
          id={id}
          key={id}
          title={title}
          blog={blog}
          createdAt={createdAt}
        />
      ))}
      <div className="bloglist__post">
        <Link to="/create">
          <button className="buttons buttons--post">New Post</button>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  blogs: selectBlogs(state.blogPost, state.filters)
});

export default connect(mapStateToProps)(BlogList);
