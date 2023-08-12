import "./SideBar.css";
import React from "react";

const SideBar = () => {
  return (
    <>
      <div className="sidebar__container">
        <div className="sidebar__site">
          <p className="sidebar__site-business-name">Temporary Business Name</p>
          <div className="sidebar__site-address">
            <p className="sidebar__site-address-street">123 Any Street</p>
            <p className="sidebar__site-address-unit">Suite 17</p>
            <p className="sidebar__site-address-city-state-zip">
              Anytown, TX 78758
            </p>
            <p className="sidebar__site-hours">8:30 am - 6:00 pm</p>
          </div>
        </div>
        <div className="sidebar__site">
          <p className="sidebar__site-business-name">Temporary Business Name</p>
          <div className="sidebar__site-address">
            <p className="sidebar__site-address-street">123 Any Street</p>
            <p className="sidebar__site-address-unit">Suite 18</p>
            <p className="sidebar__site-address-city-state-zip">
              Anytown, TX 78758
            </p>
            <p className="sidebar__site-hours">8:30 am - 6:00 pm</p>
          </div>
        </div>
        <div className="sidebar__site">
          <p className="sidebar__site-business-name">Temporary Business Name</p>
          <div className="sidebar__site-address">
            <p className="sidebar__site-address-street">123 Any Street</p>
            <p className="sidebar__site-address-unit">Suite 19</p>
            <p className="sidebar__site-address-city-state-zip">
              Anytown, TX 78758
            </p>
            <p className="sidebar__site-hours">8:30 am - 6:00 pm</p>
          </div>
        </div>
        <div className="sidebar__site">
          <p className="sidebar__site-business-name">Temporary Business Name</p>
          <div className="sidebar__site-address">
            <p className="sidebar__site-address-street">123 Another Street</p>
            <p className="sidebar__site-address-unit">Suite 19</p>
            <p className="sidebar__site-address-city-state-zip">
              Anytown, TX 78758
            </p>
            <p className="sidebar__site-hours">8:30 am - 6:00 pm</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
