import Header from "./Header";
import BlogForm from "./BlogForm";

import React from "react";

export default function CreateBlog() {
  return (
    <div className="create__container">
      <div classsName="create__header">
        <Header />
      </div>
      <div className="create__remaining">
        <BlogForm />
      </div>
    </div>
  );
}
