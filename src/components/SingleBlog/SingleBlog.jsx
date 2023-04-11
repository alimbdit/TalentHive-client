import React from 'react';

const SingleBlog = ({blog}) => {
    const {id, question, answer} = blog;
    return (
        <div className='border border-error/25 rounded-lg p-8 mb-10 bg-accent bg-opacity-5'>
            <h1 className='font-bold text-accent mb-3 text-xl'>{id}. {question}</h1>
            <p className='text-info text-lg font-medium mb-2'>
                <span className='font-extrabold text-title'>Ans: </span>
                {answer}
            </p>
            
        </div>
    );
};

export default SingleBlog;