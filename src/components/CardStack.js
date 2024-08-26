import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import "../styles/CardStack.css";

const CardStack = (props) => {
  const list = useSelector((state) => state.list.value);
  return (
    <div className="card-stack">
      {list.map((item) => (
        <Card key={item.id} item={item} onMatch={props.onMatch} />
      ))}
    </div>
  );
};

export default CardStack;
