import React, { useState, useEffect } from "react";

import { SingleDatePicker } from "react-dates";

import moment from "moment";
import { connect } from "react-redux";
import { addBlogEntry, startAddBlogEntry } from "../actions/blog";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

export function BlogForm(props) {
  const [title, setTitle] = useState(
    props.editedBlog ? props.editedBlog.title : ""
  );
  const [blog, setBlog] = useState(
    props.editedBlog ? props.editedBlog.blog : ""
  );

  const [calenderFocused, setCalenderFocused] = useState(null);
  const [error, setError] = useState("");
  const [final, setFinal] = useState({});

  useEffect(() => {
    if (Object.entries(final).length === 0 && final.constructor === Object) {
    } else {
      if (!props.editedBlog) {
        props.startAddBlogEntry(final);
        props.history.push("/dashboard");
      } else {
        props.onSubmit(props.editedBlog.id, final);
        props.history.push("/dashboard");
      }
    }
  }, [props, final, props.startAddBlogEntry, props.history]);

  const [createdAt, setCreatedAt] = useState(
    props.editedBlog ? moment(props.editedBlog.createdAt) : moment()
  );

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
    setCalenderFocused(focus.focused);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    if (title.length < 1 || blog.length < 1) {
      setError("You need to fill out the Title and Blog form");
    } else {
      setFinal({
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
    <div className="bf__container">
      {error.length > 1 && (
        <div className="bg__error">
          <h1>{error}</h1>
        </div>
      )}
      <form className="bf__formContainer" onSubmit={handleOnSubmit}>
        <div className="bf__above">
          <input
            className="bf__input"
            value={title}
            onChange={handleOnChange}
            placeholder="Blog Title"
            type="text"
          />
          <div className="single">
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
          </div>
        </div>
        <div className="bf__textArea">
          <textarea
            placeholder="Blog goes here"
            type="text"
            value={blog}
            onChange={handleBlogChange}
          />
        </div>

        <div className="bf__buttonPost">
          <button className="buttons ">Post Blog</button>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addBlogEntry: data => dispatch(addBlogEntry(data)),
  startAddBlogEntry: blog => dispatch(startAddBlogEntry(blog))
});

export default compose(
  withRouter,
  connect(undefined, mapDispatchToProps)
)(BlogForm);
