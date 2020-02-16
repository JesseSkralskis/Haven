import React from "react";
import moment from "moment";

import { withRouter } from "react-router-dom";

export function BlogListItem({ id, title, blog, createdAt, history }) {
  const handleOnClick = id => {
    history.push(`/expandedBlog/${id}`);
  };

  return (
    <div className="bloglist_items">
      <h1>{title}</h1>
      <div className="bloglist_blog">
        <p>{blog}</p>
      </div>

      <button
        className="buttons buttons--secondary_darkPurp"
        onClick={() => handleOnClick(id)}
      >
        Read More
      </button>

      <small>{moment(createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</small>
    </div>
  );
}

export default withRouter(BlogListItem);
