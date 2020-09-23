import React from "react";
import { Menu } from "antd";

//=======================================
//       Presentational Component
//=======================================
export const NavMenu = ({ currentKey, onClick, mode, items }) => {
  return (
    <Menu onClick={onClick} selectedKeys={[currentKey]} mode={mode}>
      {items &&
        items.map((navItem) => (
          <Menu.Item key={navItem.key}>{navItem.elem}</Menu.Item>
        ))}
    </Menu>
  );
};
