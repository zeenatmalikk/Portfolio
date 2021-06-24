import React, { useState } from "react";
import Drawercomp from "./Drawer";
import Tool from "./Tool";


const Navheader = () => {
  const [left, setleft] = useState(false);

  const toggleDrawer = () => {
    setleft(false);
  };
  const openDrawer = () => {
    setleft(true);
  };
  return (
    <div>
      <Tool openDrawerHandler={openDrawer} />
      <Drawercomp left={left} toggleDrawerHandler={toggleDrawer} />
    </div>
  );
};

export default Navheader;