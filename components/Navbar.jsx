import React from "react";
import { BiSearch, BiUserCircle } from "react-icons/bi";
import { VscBell } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { title } = useSelector((state) => state.title);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftNav}>{title}</div>
        <div className={styles.midNav}>
          <input type="text" placeholder="Search..." />
          <BiSearch size={24} />
        </div>
        <div className={styles.rightNav}>
          <VscBell size={24} />
          <FiSettings size={24} />
          <BiUserCircle size={24} />
        </div>
      </div>
      <div className={styles.innerBox}>
        <div className={styles.username}>
          <h1>
            <span>Hello!</span> USER'S NAME
          </h1>
          <p>Your overview is here</p>
        </div>

        <div className={styles.refreshData}>
          <p>Refresh Data : </p>
          <select>
            <option>Every 15 mins</option>
            <option>Every 30 mins</option>
            <option>Every 60 mins</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Navbar;
