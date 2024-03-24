"use client";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { forumData } from "../Data/forumData";
import { storiesData } from "../Data/StoriesData";
import ForumCard from "./DiscussionForum/ForumCard";
import StoryCard from "./MarketStories/StoryCard";

const HomePage = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [forumOpen, setForumOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 720);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openForum = (data) => {
    setForumOpen(data === "yes");
  };

  return (
    <>
      {isMobileView && (
        <div className="text-slate-200 flex mt-2 text-center fixed w-full">
          <div
            className={`w-1/2 py-2 bg-${
              forumOpen ? "[#133c68]" : "[#006DB5]"
            } cursor-pointer`}
            onClick={() => openForum("yes")}
          >
            Discussion Forum
          </div>
          <div
            className={`w-1/2 py-2 bg-${
              !forumOpen ? "[#133c68]" : "[#006DB5]"
            } cursor-pointer`}
            onClick={() => openForum("no")}
          >
            Market Stories
          </div>
        </div>
      )}
      <div className="w-11/12 h-full mx-auto overflow-hidden mt-16 lg:mt-5">
        <Grid container className="h-full justify-between">
          <Grid
            item
            xs={12}
            lg={8}
            className={
              isMobileView ? (forumOpen ? "block" : "hidden") : "block"
            }
          >
            <div className="">
              {!isMobileView && (
                <div className="inline-block text-4xl font-semibold text-red-500 bg-gray-200 p-2 my-2">
                  DISCUSSION FORUM
                </div>
              )}
              <div className="space-y-5 lg:space-y-20">
                {forumData.map((item, id) => (
                  <ForumCard data={item} key={id} isMobileView={isMobileView} />
                ))}
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            lg={3}
            className={
              isMobileView ? (!forumOpen ? "block" : "hidden") : "block"
            }
          >
            <div className="">
              {!isMobileView && (
                <div className="inline-block text-3xl font-semibold text-red-500 bg-gray-200 p-2 my-5">
                  MARKET STORIES
                </div>
              )}
              <div className="space-y-5">
                {storiesData.map((item, id) => (
                  <StoryCard data={item} key={id} />
                ))}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default HomePage;
