import React from 'react'
import '../css/blogCard.css'

function BlogCard({ blog }) {
    return (
        <div className="blog col-xl-3 col-md-6 mb-4">
            <article>
                <div className="post-img">
                    <img src={blog.thumbnail} alt="img" className='img-fluid' />
                </div>
                <div className="post-category">{blog.category}</div>
                <h2 className="title">
                    <a href="#">{blog.title}</a>
                </h2>

                <div className="d-flex align-items-center">
                    <img
                        src={blog.author.image}
                        alt=''
                        className='img-fluid post-author-img flex-shrink-0'
                    />
                    <div className="post-meta">
                        <p className="post-author-list">{blog.author.name}</p>
                        <p className="post-date">
                            <time datetime="2024-29-06"> {blog.date}</time>
                        </p>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default BlogCard