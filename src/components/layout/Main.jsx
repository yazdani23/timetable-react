import { Switch, Route } from "react-router-dom";
import Home from "./../../pages/Home.js"
import SignUp from "./../../pages/SignUp.js"
import Login from "../../pages/Login.js"
import Verification from "../../pages/Verification.js"
import ForgotPassword from "./../auth/ForgotPassword"

function Main (){
return(
    <div className="container mt-3">
         <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/sign-up">
            <SignUp></SignUp>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/verify/account/">
            <Verification></Verification>
          </Route>
          <Route path="/reset/pass/">
            <ForgotPassword></ForgotPassword>
          </Route>
        </Switch>
    </div>
)
}

export default Main;