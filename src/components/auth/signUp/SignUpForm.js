import Input from "./../../customiseElements/Input";
import { useState } from "react";
import api from "../../../api/endpoint.js";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

function SignUpForm(params) {
  let history = useHistory();

  let userDetail = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    securityNumber: 0,
  };

  const [user, setUser] = useState(userDetail);

  return (
    <div className="container d-flex justify-content-center">
      <div className="row my-5">
        <div className="col-md-6 text-left text-white lcol">
          <div className="greeting">
            <h3>
              Welcome to <span className="txt">stoke</span>
            </h3>
          </div>
          <h6 className="mt-3">
            let's light some fire and get the show on the road...
          </h6>
          <div className="footer">
            <div className="socials d-flex flex-row justify-content-between text-white">
              <div className="d-flex flex-row">
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
              </div>
              <span>Privacy Policy</span> <span>&copy; 2020 Stoke</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 rcol">
          <form className="sign-up" onSubmit={signUpForm}>
            <h2 className="heading mb-4">Sign up</h2>

            <Input
              type="name"
              placeholder="First Name"
              value={(e) => setUser({ ...user, firstName: e })}
            />
            <Input
              type="name"
              placeholder="Last Name"
              value={(e) => setUser({ ...user, lastName: e })}
            />
            <Input
              type="name"
              placeholder="Security Number"
              value={(e) => setUser({ ...user, securityNumber: Number(e) })}
            />
            <Input
              type="email"
              placeholder="Email"
              value={(e) => setUser({ ...user, email: e })}
            />
            <Input
              type="password"
              placeholder="Password"
              value={(e) => setUser({ ...user, password: e })}
            />

            <label className="form-check-label ml-3">
              I agree to Stoke <u>Terms</u> and <u>Privacy Policy</u>
            </label>
            <button type="submit" className="btn btn-success mt-5">
              Get satrted now
            </button>
          </form>

          <p className="exist mt-4">
            Existing user? <span>Log in</span>
          </p>
        </div>
      </div>
    </div>
  );

  /**
   *
   * @param {object} user
   */
  function signUpForm(e) {
    e.preventDefault();
    console.log(user);

    api
      .post("/authenticate/signup", user)
      .then((response) => {
        if (response.status === 400) {
          console.log(response.text());
        } else {
          console.log(response.data);
         
          swal("An account verification email was sent, check your email to activate your account", response.data, "success").then(() => {
            history.push("/login");
          });
          
        }
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
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

export default SignUpForm;
