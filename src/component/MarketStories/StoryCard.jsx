import React from "react";

const StoryCard = ({ data }) => {
  return (
    <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] pb-4 rounded-lg">
      <img
        src={data.imgUrl}
        alt=""
        className="h-48 w-full object-cover object-center"
      />
      <div className="mx-5">
        <h1 className="my-2 text-sm lg:text-base font-bold text-gray-700">
          {data.heading}
        </h1>
        <p className="text-xs lg:text-sm">{data.description}</p>
      </div>
    </div>
  );
};

export default StoryCard;
