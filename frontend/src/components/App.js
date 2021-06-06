import React from "react";
import Signup from "./users/Signup"; import Login from "./users/Login";
import ForgotPassword from "./users/ForgotPassword"; import UpdateProfile from "./users/UpdateProfile";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext"; import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import dashInvestBEGIN from "./dashboards/dashInvestBEGIN"; import dashPortafolioCrypto from "./dashboards/dashPortafolioCrypto";
import InvestBENNIG from "./formADM/InvestBENNIG"; import InvestCrypto from "./formADM/InvestCrypto";
import InvestPool from "./formADM/InvestPool"; import InvestTrading from "./formADM/InvestTrading";
import graphACUM from "./graph/graphACUM"; import graphPortafolio from "./graph/graphPortafolio";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>              
              <PrivateRoute exact path="/" component={Dashboard} />

              //Router user
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />

              //Router form of manager
              <Route path="/InvestBENNIG" component={InvestBENNIG} />
              <Route path="/InvestCrypto" component={InvestCrypto} />
              <Route path="/InvestPool" component={InvestPool} />
              <Route path="/InvestTrading" component={InvestTrading} />

              //Router graph
              <Route path="/graphACUM" component={graphACUM} />
              <Route path="/graphPortafolio" component={graphPortafolio} />

              //Router dashboard 
              //<Route path="/dashInvestBEGIN" component={dashInvestBEGIN} />
              <Route path="/dashPortafolioCrypto" component={dashPortafolioCrypto} />

            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
