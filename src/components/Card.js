import React from "react";
import { useDispatch } from "react-redux";
import TinderCard from "react-tinder-card";
import { removeItem } from "../store/slices/listSlice";
import AppServer from "../utils/appServer";

import "../styles/Card.css";
const Card = (props) => {
  const appServer = new AppServer();
  const dispatch = useDispatch();
  const item = props.item;

  const swiped = async (direction, item) => {
    if (direction === "right") {
      const res = await appServer.like(item.id);
      if (res.match) {
        props.onMatch(item.posterPath);
      }
    }
  };

  const outOfFrame = (id, name) => {
    console.log(id + " " + name + " left the screen!");
    dispatch(removeItem(id));
  };

  return (
    <TinderCard
      className="tinder-card"
      key={item.title}
      onSwipe={(dir) => swiped(dir, item)}
      onCardLeftScreen={() => outOfFrame(item.id, item.title)}
    >
      <div
        style={{ backgroundImage: "url(" + item.posterPath + ")" }}
        className="card"
      >
        <div className="card-info-text">
          <span>{item.title}</span>
        </div>
      </div>
    </TinderCard>
  );
};

export default Card;
