import React from "react";
import moment from "moment";



import { withRouter } from "react-router-dom";

export function BlogListItem({ id, title, blog, createdAt, history }) {
    console.log(id);
    const handleOnClick = ({ target }) => {
        history.push(`/expandedBlog/${target.id}`);
    
    
  };

  // <ExpandedBlog/>

  return (
    <div>
      <h1>{title}</h1>
      <textarea cols="50" rows="10" defaultValue={blog}></textarea>
      <button className="button" onClick={handleOnClick} id={id}>
        Read More
      </button>
      <small>{moment(createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</small>
    </div>
  );
}

export default withRouter(BlogListItem);
    

    
