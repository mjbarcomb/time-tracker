import React, { useState, useEffect, useRef } from "react";
import Style from "./TimeCards.module.css";
import data from "../../Data/data.json";
import { Exercise, Play, SelfCare, Social, Study, Work } from "./images";

const icons = [
  {
    name: "exercise",
    icon: Exercise,
    color: "114,205,137",
    iconHeight: "4rem",
  },
  {
    name: "play",
    icon: Play,
    color: "115,192,226",
  },
  {
    name: "self care",
    icon: SelfCare,
    color: "234,200,108",
  },
  {
    name: "social",
    icon: Social,
    color: "106,56,202",
  },
  {
    name: "study",
    icon: Study,
    color: "237,106,127",
  },
  {
    name: "work",
    icon: Work,
    color: "239,145,108",
  },
];

const TimeCards = (props) => {
  const { selectedFilterOption } = props;

  const timeModeLabels = {
    daily: "Yesterday",
    weekly: "Last week",
    monthly: "Last month",
  };
  const isOneHour = (timeCard, period) => {
    return timeCard.timeframes.daily.period === 1;
  };
  const getImageProperty = (title, property) => {
    return icons.filter((icon) => icon.name === title.toLowerCase())[0][
      property
    ];
  };
  return data && selectedFilterOption ? (
    <ul className={Style.timeCards}>
      {data.map((timeCard) => (
        <li
          className={Style.timeCard}
          key={timeCard.title}
          style={{
            "--ui-color-key": getImageProperty(timeCard.title, "color"),
          }}
        >
          <div
            className={Style.imageContainer}
            style={{
              "--image-height": getImageProperty(timeCard.title, "iconHeight"),
            }}
          >
            <img
              src={getImageProperty(timeCard.title, "icon")}
              className={Style.image}
              alt=""
            />
          </div>
          <div className={Style.textContainer}>
            <h2 className={Style.title}>{timeCard.title}</h2>
            <p className={Style.value}>
              {timeCard.timeframes[selectedFilterOption].current}
              {isOneHour(timeCard, "current") ? " hr" : " hrs"}
            </p>
            <small className={Style.previousValue}>
              {timeModeLabels[selectedFilterOption]} -{" "}
              {timeCard.timeframes[selectedFilterOption].previous}{" "}
              {isOneHour(timeCard, "previous") ? " hr" : " hrs"}
            </small>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    ""
  );
};

export default TimeCards;
