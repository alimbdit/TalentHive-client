import React from "react";

const Category = ({ category }) => {
  const { name, logo, jobCount } = category;
  
  return (
    <div className="bg-accent bg-opacity-5 p-10 rounded-lg shadow">
        <img className="p-4 rounded-lg bg-accent bg-opacity-10" src={logo} alt="Category Logo" />
      <h3 className="text-gray font-extrabold text-xl mt-8 mb-2">{name}</h3>
      <p className="font-medium text-[#A3A3A3]">{jobCount} Jobs Available</p>
    </div>
  );
};

export default Category;
