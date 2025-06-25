import React from 'react';

const Member = ({name,role,image}) => {
    return (
        <>
             <div>
          <div className="rounded-2xl p-4 border border-blue-600 shadow-md bg-white hover:-translate-y-2 transition-all ease-in-out duration-200 hover:ring-2 ring-green-500 cursor-pointer">
            <img
              className="object-cover mb-4 mx-auto rounded-full w-30 h-30 items-center"
              src={image}
              alt=""
            />
            <h2 className="text-xl text-center text-gray-600">{name}</h2>
            <p className="text-center">{role}</p>
          </div>
          
        </div>
        </>
    );
};

export default Member;