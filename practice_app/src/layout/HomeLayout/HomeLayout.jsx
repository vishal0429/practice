import React from "react";
import styles from "./HomeLayout.module.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div className={styles.homelayout}>
      <Sidebar />
      <div className={styles.rightSide}>
        <Navbar />
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
