import {
  Navbar,
  Form,
  FormControl,
  Button,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import LoggedContext from "../../context/LoggedContext.js";
import ModalContext from "../../context/ModalContext.js";
import UserContext from "../../context/UserContext.js";
import { useContext, useState, useEffect } from "react";
import LoginModal from "../auth/login/LoginModal.jsx";
/**
 * Header of the application
 * @param {*}
 */
function Header() {
  const [show, setShow] = useContext(ModalContext);
  const [isLogged, setIsLogged] = useContext(LoggedContext);
  const [userInformation, setUserInformation] = useContext(UserContext);

  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      // const u = JSON.parse(localStorage.getItem("currentUser"))
      setFirstName(userInformation.firstName);
      setIsLogged(true);
    }
  });

  //  const handleClose = () => userContext.show = false;
  const logOut = () => {
    localStorage.removeItem("currentUser");
    setIsLogged(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="d-flex justify-content-between"
      >
        <Navbar.Brand href="/home">BOOKING SYSTEM</Navbar.Brand>

        <Form inline className="w-50">
          <FormControl type="text" placeholder="Search" className="w-75" />
          <Button variant="outline-info">Search</Button>
        </Form>

        <div className="">
          {isLogged ? (
            <DropdownButton
              as={ButtonGroup}
              id={`dropdown-variants-primary`}
              variant="primary"
              title={firstName}
            >
              <Dropdown.Item eventKey="1">Profile</Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item onClick={logOut} eventKey="4">
                Log Out
              </Dropdown.Item>
            </DropdownButton>
          ) : (
            <Button className=" ml-3" variant="primary" onClick={handleShow}>
              login
            </Button>
          )}

          <Button className=" ml-3">
            <Link className="text-light" to="/sign-up">
              sign up
            </Link>
          </Button>
        </div>
      </Navbar>
      <LoginModal />
    </>
  );
}

export default Header;
