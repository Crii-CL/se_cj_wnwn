import "./SideBar.css";
import React from "react";

const SideBar = () => {
  return (
    <div>
      <div className="sidebar__container">
        <div className="site">
          <p className="site__business-name">Temporary Business Name</p>
          <div className="site__address">
            <p className="site__address_street">123 Any Street</p>
            <p className="site__address_unit">Suite 17</p>
            <p className="site__address_city-state-zip">Anytown, TX 78758</p>
            <p className="site__hours">8:30 am - 6:00 pm</p>
          </div>
        </div>
        <div className="site">
          <p className="site__business-name">Temporary Business Name</p>
          <div className="site__address">
            <p className="site__address_street">123 Any Street</p>
            <p className="site__address_unit">Suite 18</p>
            <p className="site__address_city-state-zip">Anytown, TX 78758</p>
            <p className="site__hours">8:30 am - 6:00 pm</p>
          </div>
        </div>
        <div className="site">
          <p className="site__business-name">Temporary Business Name</p>
          <div className="site__address">
            <p className="site__address_street">123 Any Street</p>
            <p className="site__address_unit">Suite 19</p>
            <p className="site__address_city-state-zip">Anytown, TX 78758</p>
            <p className="site__hours">8:30 am - 6:00 pm</p>
          </div>
        </div>
        <div className="site">
          <p className="site__business-name">Temporary Business Name</p>
          <div className="site__address">
            <p className="site__address_street">123 Another Street</p>
            <p className="site__address_unit">Suite 19</p>
            <p className="site__address_city-state-zip">Anytown, TX 78758</p>
            <p className="site__hours">8:30 am - 6:00 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
