import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/layout/Main.jsx";

// imports components
import Header from "./components/layout/Header.jsx";
import LoggedContext from "./context/LoggedContext.js";
import ModalContext from "./context/ModalContext.js";
import UserContext from "./context/UserContext.js";
import { useState } from "react";

//Component---Before that, it was class instead of function
function App() {
  const [show, setShow] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const [userInformation, setUserInformation] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  return (
    <div className="App">
      <LoggedContext.Provider value={[isLogged, setIsLogged]}>
        <ModalContext.Provider value={[show, setShow]}>
          <UserContext.Provider value={[userInformation, setUserInformation]}>
            <Router>
              <Header></Header>
              <Main></Main>
            </Router>
          </UserContext.Provider>
        </ModalContext.Provider>
      </LoggedContext.Provider>
    </div>
  );
}

export default App;
