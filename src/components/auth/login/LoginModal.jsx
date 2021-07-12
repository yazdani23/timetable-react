import { Modal } from "react-bootstrap";
import "./modal.css";
import { useContext , useState} from "react";
import { Link, useHistory } from "react-router-dom";
import ModalContext from "../../../context/ModalContext.js";
import LoggedContext from "../../../context/LoggedContext.js";
import UserContext from "../../../context/UserContext.js";
import { useEffect } from "react";
import Form from "./Form.jsx";
import api from "../../../api/endpoint";


function LoginModal(props) {


  let history = useHistory();
  const [show, setShow] = useContext(ModalContext);
  const [isLogged, setIsLogged] = useContext(LoggedContext);
  const [userInformation, setUserInformation] = useContext(UserContext)
  const [error, setError] = useState("")
    setTimeout(() => {
    setError("")
  }, 3000);
  useEffect(() => {
    console.log("loginModal");
  }, [show]);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <h3>Sign In</h3>
      </Modal.Header>
      <Modal.Body>
        <Form userInfoForm={getUser} error={error} />
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-center links">
          Don't have an account?
          <Link to="sign-up" onClick={handleClose}>
            Sign Up
          </Link>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="#" onClick={handleClose}>
            Forgot your password?
          </Link>
        </div>
      </Modal.Footer>
    </Modal>
  );

  /**
   *
   * @param {object} user
   */
  function getUser(user) {
    
    console.log(user);
    api
      .post("/authenticate/login", user)
      .then((response) => {
        if (response.status === 400) {
          console.log(response.text());
        } else {
          console.log(response.data);
          const token=  response.data.accessToken;

          api
          .get("/customer/mydetails", {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((response) => {
            localStorage.setItem("currentUser", JSON.stringify(response.data));

            const {id, firstName,lastName, email, securityNumber} = response.data;
            console.log(response.data);
            setUserInformation(response.data )
            setIsLogged(true);
          })

          
          setShow(false);
          history.push("/home");

        }
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data); // the response is email not found
          setError(error.response.data)
          console.log(error.response.status); // STATUS 418 when email not found but 403 when pass is wrong
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);

        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
     
  
  }
}

export default LoginModal;
