import React from "react";

const BlogCard = (props) => {
  return (
    <>
      <div key={props.blog.id} className="blog-card">
        <h3>{props.blog.title}</h3>
        <p>{props.blog.body}</p>
      </div>
    </>
  );
};

export default BlogCard;
