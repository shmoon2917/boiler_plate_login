import React, { useEffect, useState } from "react";
import { HomeFilled } from "@ant-design/icons";
import { StyledNav, StyledNavLogo, StyledNavContainer } from "./styled";
import { NavMenu } from "./NavMenu";
import { Link } from "react-router-dom";

const navItemsForNonUser = [
  { key: "signin", elem: <Link to="/login">Sign In</Link> },
  {
    key: "signup",
    elem: <Link to="/register">Sign Up</Link>,
  },
];

const navItemsForUser = [
  { key: "upload", elem: <Link to="/product/upload">Upload</Link> },
];

//=======================================
//       Presentational Component
//        With Styled Component
//=======================================
export const NavBar = ({ onClick, currentKey, user }) => {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    user ? setNavItems(navItemsForUser) : setNavItems(navItemsForNonUser);
  }, [user]);

  return (
    <StyledNav>
      <StyledNavLogo>
        <Link to="/">
          <HomeFilled />
          <span>Home</span>
        </Link>
      </StyledNavLogo>
      <StyledNavContainer>
        <NavMenu
          onClick={onClick}
          currentKey={currentKey}
          mode="horizontal"
          items={navItems}
        />
      </StyledNavContainer>
    </StyledNav>
  );
};
