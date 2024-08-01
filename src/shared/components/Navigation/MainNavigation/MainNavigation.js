import React, { useState } from "react";
import "./MainNavigation.css";
import MainHeader from "../MainHeader/MainHeader.js";
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks.js";
import SideDrawer from "../SideDrawer/SideDrawer.js";
import BackDrop from "../../UIElements/BackDrop/BackDrop.js";

function MainNavigation() {
  const [drawerisOpen, setDrawerisOpen] = useState(false);

  const toggleDrawerHandler = () => {
    setDrawerisOpen(!drawerisOpen);
  };

  return (
    <>
      {drawerisOpen && <BackDrop onClick={toggleDrawerHandler}/>}
        <SideDrawer show = {drawerisOpen} close = {toggleDrawerHandler}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={toggleDrawerHandler}>
          <span></span> <span></span> <span></span>
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks></NavLinks>
        </nav>
      </MainHeader>
    </>
  );
}

export default MainNavigation;
