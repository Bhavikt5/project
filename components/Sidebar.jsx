import React, { useState } from "react";
import styles from "../styles/Sidebar.module.css";
import Link from "next/link";
import { SidebarData } from "./sidebarData";
import { useDispatch } from "react-redux";

const Sidebar = (props) => {
  const dispatch = useDispatch();

  const activeStyle = {
    backgroundColor: "white",
    borderRadius: "9px 0 0 9px",
  };

  const notActive = {
    // marginBottom: "10px",
  };

  const [active, setActive] = useState(activeStyle);

  const [click, setClick] = useState();

  const focus = (item, index) => {
    setClick(index);

    dispatch({
      type: "getTitle",
      payload: item.title,
    });
  };
  return (
    <div className={styles.sidebar}>
      <h1 className={styles.logo}>
        Data<span>Scene</span>
      </h1>
      <ul className={styles.list}>
        {SidebarData.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => focus(item, index)}
              style={click === index ? active : notActive}
              className={styles.linkContainer}
            >
              <Link href={item.path}>
                <div className={styles.linkStyle}>
                  {item.icon}
                  {item.title}
                </div>
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
