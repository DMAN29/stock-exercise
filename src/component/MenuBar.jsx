"use client";
import { Avatar, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ChatIcon from "@mui/icons-material/Chat";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const MenuBar = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsDropDown(!isDropDown);
  };
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 720);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mainMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className=" h-[100vh]  fixed lg:sticky top-0 text-slate-200 flex z-10">
      {isMenuOpen && (
        <div className="w-56 lg:w-96 bg-[#133c68]">
          <div className="flex  justify-between items-center lg:text-2xl px-5 py-8">
            <div className="flex items-center space-x-2">
              <Avatar sx={{ backgroundColor: "#006DB5" }} />
              <span>Hello, User</span>
            </div>
            <NotificationsIcon fontSize={isMobileView ? "small" : "large"} />
          </div>
          <hr />
          <div className="text-sm lg:text-xl mt-5 space-y-8">
            <div className="bg-blue-950 ">
              <Grid
                container
                className="justify-around py-2"
                onClick={toggleMenu}
              >
                <Grid item xs={1.5}>
                  <ChatIcon fontSize={isMobileView ? "small" : "large"} />
                </Grid>
                <Grid
                  item
                  xs={9}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>Discussion Forum</div>
                  <ArrowDropDownIcon
                    sx={{ transform: isDropDown && "rotate(180deg)" }}
                  />
                </Grid>
              </Grid>
              {isDropDown && (
                <>
                  <Grid container className="justify-around">
                    <Grid item xs={2}></Grid>
                    <Grid item xs={10}>
                      Link 1
                    </Grid>
                  </Grid>
                  <Grid container className="justify-around">
                    <Grid item xs={2}></Grid>
                    <Grid item xs={10}>
                      Link 1
                    </Grid>
                  </Grid>
                  <Grid container className="justify-around">
                    <Grid item xs={2}></Grid>
                    <Grid item xs={10}>
                      Link 1
                    </Grid>
                  </Grid>
                  <Grid container className="justify-around">
                    <Grid item xs={2}></Grid>
                    <Grid item xs={10}>
                      Link 1
                    </Grid>
                  </Grid>
                </>
              )}
            </div>
            <Grid container className="justify-around">
              <Grid item xs={1.5}>
                <MonetizationOnIcon
                  fontSize={isMobileView ? "small" : "large"}
                />
              </Grid>
              <Grid item xs={9}>
                Market Stories
              </Grid>
            </Grid>
            <Grid container className="justify-around">
              <Grid item xs={1.5}></Grid>
              <Grid item xs={9}>
                Sentiment
              </Grid>
            </Grid>
            <Grid container className="justify-around">
              <Grid item xs={1.5}></Grid>
              <Grid item xs={9}>
                Market
              </Grid>
            </Grid>
            <Grid container className="justify-around">
              <Grid item xs={1.5}></Grid>
              <Grid item xs={9}>
                Sector
              </Grid>
            </Grid>
            <Grid container className="justify-around">
              <Grid item xs={1.5}></Grid>
              <Grid item xs={9}>
                Watchlist
              </Grid>
            </Grid>
            <Grid container className="justify-around">
              <Grid item xs={1.5}></Grid>
              <Grid item xs={9}>
                Events
              </Grid>
            </Grid>
            <Grid container className="justify-around">
              <Grid item xs={1.5}></Grid>
              <Grid item xs={9}>
                News / Interview
              </Grid>
            </Grid>
          </div>
        </div>
      )}
      <div
        className="w-5 relative h-48 bg-[#133c68] top-[50%] translate-y-[-50%] flex items-center rounded-r-lg"
        onClick={mainMenu}
      >
        <ArrowDropDownIcon
          sx={{ transform: isMenuOpen ? "rotate(90deg)" : "rotate(-90deg)" }}
        />
      </div>
    </div>
  );
};

export default MenuBar;
