import React from 'react'
import { connect } from 'react-redux';
import BlogListItem from './BlogListItem';


export  function BlogList({blogs}) {
    
    return (
        <div>
           { blogs.map(({id, title, blog, createdAt})=>(
               <BlogListItem id={id} key={id} title={title} blog={blog} createdAt={createdAt}/>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    blogs: state.blogPost
    
})

export default connect(mapStateToProps)(BlogList);