//=======================================
//          Libraries and Utils
//=======================================
import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { history } from "../../_helpers";
import "../../styles/global";

//=======================================
//  Styled Component and Pages For App
//=======================================
import {
  Container,
  GlobalStyle,
  StyledHeader,
  StyledContent,
  StyledFooter,
} from "./styled";
import NavBarContainer from "../NavBar";
import LandingPage from "../LandingPage";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";

function App() {
  useEffect(() => {}, []);

  return (
    <Container>
      <GlobalStyle />
      <Router history={history}>
        <StyledHeader>
          <NavBarContainer />
        </StyledHeader>

        <StyledContent>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </StyledContent>

        <StyledFooter>
          Boilerplate App ©2020 Created by Sangho Moon
        </StyledFooter>
      </Router>
    </Container>
  );
}

export default App;