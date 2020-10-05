//=======================================
//          Libraries and Utils
//=======================================
import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { history } from "../../_helpers";
import { AuthRoute } from "../../_components/AuthRoute";
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
import NavBar from "../NavBar";
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
          <NavBar />
        </StyledHeader>

        <StyledContent>
          <Switch>
            <AuthRoute exact path="/" forWhom="all" component={LandingPage} />
            <AuthRoute path="/login" forWhom="nonUser" component={LoginPage} />
            <AuthRoute
              path="/register"
              forWhom="nonUser"
              component={RegisterPage}
            />
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
