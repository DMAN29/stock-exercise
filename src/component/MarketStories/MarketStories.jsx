import React from "react";
import StoryCard from "./StoryCard";
import { storiesData } from "../../Data/StoriesData";
const MarketStories = () => {
  return (
    <div>
      <div className="inline-block text-3xl font-semibold text-red-500 bg-gray-200 p-2 my-5">
        MARKET STORIES
      </div>
      <div className="space-y-5">
        {storiesData.map((item, id) => (
          <StoryCard data={item} key={id} />
        ))}
      </div>
    </div>
  );
};

export default MarketStories;
