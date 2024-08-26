import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../store/slices/listSlice";
import { increment } from "../store/slices/pageSlice";
import AppServer from "../utils/appServer";
import CardStack from "./CardStack";
import "../styles/Swiper.css";
import Popup from "react-animated-popup";
import ItsAMatch from "./ItsAMatch";

const appServer = new AppServer();
const Swiper = () => {
  const list = useSelector((state) => state.list.value);
  const page = useSelector((state) => state.page.value);
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    if (list.length === 0 || list.length <= 3) {
      appServer
        .getMovies(page)
        .then((movies) => dispatch(addItems(movies.reverse())))
        .then(() => dispatch(increment()));
    }
  }, [list]);

  const matchCallback = (imgUrl) => {
    setVisible(true);
    setImgUrl(imgUrl);
  };

  return (
    <div className="swiper">
      <h1>Movie match</h1>
      <CardStack list={list} onMatch={matchCallback} />
      <Popup
        animationDuration={500}
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <ItsAMatch imgUrl={imgUrl} />
      </Popup>
    </div>
  );
};

export default Swiper;
