import { Avatar, Box } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
const ForumCard = ({ data, isMobileView }) => {
  return (
    <>
      <Box className="flex space-x-2 lg:space-x-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-xl my-5 py-2 text-gray-500 border">
        <Avatar className="mx-2 lg:mx-5 h-12 w-12 lg:h-20 lg:w-20 my-2">
          <img
            src={data.imgUrl}
            alt=""
            className="h-full w-full object-cover"
          />
        </Avatar>
        <div className="w-full text-xs lg:text-base">
          <div className="flex justify-between items-center">
            <div className="flex">
              <h3 className="lg:text-xl font-bold py-2">{data.fullName}</h3>
              <p className="mx-2 lg:mx-5 my-auto px-4 py-1 bg-blue-800 rounded-full text-slate-200 font-semibold">
                {data.address}
              </p>
            </div>
            <div className="min-w-20 lg:min-w-28  pr-2 font-semibold text-blue-600">
              {data.time} ago
            </div>
          </div>
          <p className="">{data.description}</p>
          <div className="flex justify-between font-bold text-gray-600 my-2 mr-2 lg:mr-10">
            <p className="lg:space-x-2 cursor-pointer">
              <FavoriteBorderIcon
                fontSize={isMobileView ? "small" : "medium"}
              />
              <span className="text-xs">{data.likes.toUpperCase()}</span>
            </p>
            <p className="lg:space-x-2 cursor-pointer">
              <VisibilityOutlinedIcon
                fontSize={isMobileView ? "small" : "medium"}
              />
              <span>{data.views.toUpperCase()}</span>
            </p>
            <p className="lg:space-x-2 cursor-pointer">
              <ChatBubbleOutlineOutlinedIcon
                fontSize={isMobileView ? "small" : "medium"}
              />
              <span>{data.comment.toUpperCase()} Comments</span>
            </p>
            <p className="lg:space-x-2 cursor-pointer">
              <ShareOutlinedIcon fontSize={isMobileView ? "small" : "medium"} />
              <span>Share</span>
            </p>
          </div>
        </div>
      </Box>
    </>
  );
};

export default ForumCard;
