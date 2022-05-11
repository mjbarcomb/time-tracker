import React, { useState } from "react";
import { user } from "../../Data/user";
import Style from "./UserCard.module.css";

const UserCard = (props) => {
  const { image, name } = user;
  const { sidebarState, setSidebarState } = props;

  const handleClick = () => {
    sidebarState === "closed"
      ? setSidebarState("open")
      : setSidebarState("closed");
  };

  return image && name ? (
    <div className={Style.userCard}>
      <div className={Style.textContainer}>
        <small className={Style.reportLabel}>Report for</small>
        <h2 className={Style.name}>{name}</h2>
      </div>
      <div className={Style.imageContainer}>
        <img className={Style.image} src={image} alt={name} />
      </div>
    </div>
  ) : (
    ""
  );
};

export default UserCard;

//TODO: Add toggle button
/*<button className={Style.toggleButton} onClick={handleClick}>{sidebarState === "closed" ? "unfold_more": "unfold_less"}</button> */
