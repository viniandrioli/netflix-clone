import React from "react";
import {
  BiSearch,
  BiHomeAlt,
  BiShuffle,
  BiCard,
  BiMovie,
  BiPlus,
  BiTrendingUp,
} from "react-icons/bi";
import "./NavBar.scss";

const size = "2rem";

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <BiSearch size={size} />
      <BiHomeAlt size={size} />
      <BiShuffle size={size} />
      <BiTrendingUp size={size} />
      <BiCard size={size} />
      <BiMovie size={size} />
      <BiPlus size={size} />
    </div>
  );
};
