import React from 'react'
import { connect } from 'react-redux';
import Header from '../components/Header';
import moment from 'moment'


export  function ExpandedBlog({blogs, match}) {
    
    return (
      <div>
        <Header />
            {blogs.map((blog) => {
                if (blog.id === match.params.id) {
                    return (
                      <article>
                        <h1>{blog.title}</h1>
                        <p>{blog.blog}</p>
                        <small>
                          {moment(blog.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                        </small>
                      </article>
                    );
             }
         })}  
                
          
      </div>
    );
}

const mapStateToProps = (state) => ({
    blogs: state.blogPost
})
    
export default connect(mapStateToProps)(ExpandedBlog);
