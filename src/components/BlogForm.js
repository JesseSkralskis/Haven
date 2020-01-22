import React, { useState, useEffect } from "react";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import { connect } from "react-redux";
import { addBlogEntry } from "../actions/blog";
import uuid from "uuid";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

export function BlogForm({ addBlogEntry, history }) {
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState("");
  const [calenderFocused, setCalenderFocused] = useState(null);
  const [error, setError] = useState("");
  const [final, setFinal] = useState({});
  useEffect(() => {
    if (Object.entries(final).length === 0 && final.constructor === Object) {
      console.log("empty");
    } else {
      addBlogEntry(final);
      history.push("/dashboard");
    }
  }, [final, addBlogEntry]);

  const [createdAt, setCreatedAt] = useState(moment());

  const handleOnChange = e => {
    setTitle(e.target.value);
  };

  const handleBlogChange = e => {
    const value = e.target.value;
    setBlog(value);
  };
  const handleDateChange = date => {
    setCreatedAt(date);
  };

  const onFocusChange = focus => {
    setCalenderFocused(focus);
  };

  

  const handleOnSubmit = e => {
    e.preventDefault();
    if (title.length < 1 || blog.length < 1) {
      setError("You need to fill out the Title and Blog form");
    } else {
      setFinal({
        id: uuid(),
        title: title,
        blog: blog,
        createdAt: createdAt.valueOf()
      });
      setTitle("");
      setBlog("");
      setCreatedAt(moment());
    }
  };
  return (
    <div>
      {error.length > 1 && (
        <div>
          <h1>{error}</h1>
        </div>
      )}
      <form onSubmit={handleOnSubmit}>
        <input
          value={title}
          onChange={handleOnChange}
          placeholder="Blog Title"
          type="text"
        />
        <textarea type="text" value={blog} onChange={handleBlogChange} />

        <SingleDatePicker
          date={createdAt}
          //similr to other event handlers but difference is
          //this one is called by our third party library
          onDateChange={handleDateChange}
          focused={calenderFocused}
          onFocusChange={onFocusChange}
          //custumization
          //docu https://github.com/airbnb/react-dates
          numberOfMonths={1}
          isOutsideRange={() => {
            return false;
          }}
        />

        <button className="button">Post Blog</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addBlogEntry: data => dispatch(addBlogEntry(data))
});

export default compose(
  withRouter,
  connect(undefined, mapDispatchToProps)
)(BlogForm);
