import styled from "styled-components";

const StyledNav = styled.nav`
  padding: 0 20px;
  border-bottom: solid 1px #e8e8e8;
  box-shadow: 0 0 30px #f3f1f1;
  position: fixed;
  z-index: 5;
  width: 100%;

  // & StyledNavLogo { }
  // & StyledNavContainer { }
`;

const StyledNavLogo = styled.div`
  width: 120px;
  float: left;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }

  & a > span:last-child {
    margin-left: 10px;
  }
`;

const StyledNavContainer = styled.div`
  float: right;

  & .ant-menu-horizontal {
    border-bottom: none !important;
  }

  & .ant-menu-item {
    margin: 0px !important;
    padding: 0 15px !important;
  }
`;

export { StyledNav, StyledNavLogo, StyledNavContainer };
