import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { king } from "../routes/PublicRoute";

import { withRouter } from "react-router-dom";

export function BlogListItem({ id, title, blog, createdAt, history, uid }) {
  const handleOnClick = id => {
    history.push(`/expandedBlog/${id}`);
  };

  return (
    <div className="bloglist_items">
      <h1>{title}</h1>
      <div className="bloglist_blog">
        <p>{blog}</p>
      </div>
      <div className="bloglist__readmore-wrapper">
        <button
          className="buttons buttons--secondary_darkPurp"
          onClick={() => handleOnClick(id)}
        >
          Read More
        </button>
      </div>

      <div className="bloglist__post">
        {king === uid && (
          <Link to="/create">
            <button className="buttons buttons--post">New Post</button>
          </Link>
        )}
      </div>

      <small>{moment(createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</small>
    </div>
  );
}

export default withRouter(BlogListItem);
