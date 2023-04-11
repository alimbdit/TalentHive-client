import React, { useEffect, useState } from "react";
import {useLoaderData } from "react-router-dom";
import SingleBlog from "../SingleBlog/SingleBlog";


const Blogs = () => {
  const blogs = useLoaderData();

  return (
    <div className="mx-5 lg:mx-10 my-16">
      <h1 className="font-extrabold text-5xl my-8 text-center text-gradient">
        Simple Question Answer
      </h1>
      {blogs &&
        blogs.map((blog) => (
          <SingleBlog key={blog.id} blog={blog}></SingleBlog>
        ))}
    </div>
  );
};

export default Blogs;