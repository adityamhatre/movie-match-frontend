import React, { useEffect } from "react";
import AppServer from "../utils/appServer";
import Select from "react-select";
import Swiper from "./Swiper";
import "../styles/UserPicker.css";
import { useDispatch, useSelector } from "react-redux";
import { setPairingKey } from "../store/slices/pairingKeySlice";

const UserPicker = () => {
  const appServer = new AppServer();
  const [users, setUsers] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [showSwiper, setShowSwiper] = React.useState(false);
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.loggedIn.value);

  const loadUsers = async () => {
    const users = await appServer.getUsers();
    setUsers(users);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  if (users.length === 0) {
    return <div>Loading...</div>;
  }

  const userOptions = users.map((user) => ({
    label: `${user.displayName} (${user.email})`,
    value: user.uid,
    ...user,
  }));

  const onChange = (selectedOption) => {
    setSelectedUser(selectedOption);
  };

  const goToSwiper = () => {
    const pairingKey = [loggedIn.uid, selectedUser.uid].sort().join("");

    dispatch(
      setPairingKey({
        currentUser: loggedIn.uid,
        otherUser: selectedUser.uid,
        pairingKey: pairingKey,
      })
    );
    setShowSwiper(true);
  };

  if (showSwiper) {
    return <Swiper />;
  }

  return (
    <div className="user-picker">
      <Select
        placeholder="Select an user..."
        className="select-user"
        options={userOptions}
        onChange={onChange}
      />
      <button
        className="user-select"
        disabled={selectedUser === null}
        onClick={goToSwiper}
      >
        Select User
      </button>
    </div>
  );
};

export default UserPicker;
