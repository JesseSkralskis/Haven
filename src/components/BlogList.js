import React from "react";
import { connect } from "react-redux";
import BlogListItem from "./BlogListItem";
import selectBlogs from "../selectors/blogSelectors";
import Filters from "./Filters";
import { Link } from "react-router-dom";
import { king } from "../routes/PublicRoute";

const BlogList = ({ blogs, uid }) =>
  uid === king ? (
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
  ) : (
    <div className="xbloglist__container">
      <div className="xbloglist__container--secondary">
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
    </div>
  );

const mapStateToProps = state => ({
  blogs: selectBlogs(state.blogPost, state.filters),
  uid: state.auth.uid
});

export default connect(mapStateToProps)(BlogList);
