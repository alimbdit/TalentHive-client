import React, { useEffect, useState } from "react";
import "./CategoryList.css";
import Category from "../Category/Category";

const CategoryList = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('job-category.json').then(res=>res.json()).then(data=>setCategories(data))
    },[])


    

  return (
    <div className="my-container">
      <div className="">
        <h1 className="title">Job Category List</h1>
        <p className="text-info font-medium text-center py-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 py-4">
        {
            categories.map(category => <Category 
                key={category._id}
                category={category}
                ></Category>)
        }

      </div>
    </div>
  );
};

export default CategoryList;
