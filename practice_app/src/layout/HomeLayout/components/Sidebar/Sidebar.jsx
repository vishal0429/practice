import React from "react";
import styles from "./Sidebar.module.scss";
import sidebarNavigation from "../../../../utils/sidebarNavigation";
import { NavLink } from "react-router-dom";
import { combineClass } from "../../../../utils/constaint";

function Sidebar() {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.logoContainer}>Logo</div>
      <div className={styles.sidebarLinks}>
        {sidebarNavigation.map((item) => {
          return (
            <NavLink className={({isActive}) => combineClass(styles.sidebarItem, isActive && styles.sidebarItemActive)  } to={item.path} key={item.id}>
              {item.pageName}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
