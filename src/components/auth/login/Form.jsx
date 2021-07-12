import React, { useState } from "react";
import "./form.css"

function Form(props){


  

  const [userLogin,setUserLogin]=useState({
    email: "",
    password: "",
  })

    return (
   
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.userInfoForm(userLogin);
            }}
          >
            
            <h5 className="text-danger text-center" > {props.error}</h5>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={userLogin.email}
                onChange={(e) => setUserLogin({...userLogin, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={userLogin.password}
                onChange={(e) => setUserLogin({...userLogin, password: e.target.value })}
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label text-white" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-warning btn-lg btn-block">
              Sign in
            </button>
            
          </form>
   
    );
  }


export default Form;

/*****************************
 return (
      <>
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="bg-dark">
              <div className="header-form" closeButton>
                <h3>Sign In</h3>
                <div className="d-flex justify-content-end social_icon">
                  <span>
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                  </span>
                  <span>
                    <FontAwesomeIcon icon={["fab", "apple"]}></FontAwesomeIcon>
                  </span>
                  <span>
                    <i className="fab fa-twitter-square"></i>
                  </span>
                </div>
              </div>
              <div className="body-form">
                <form onSubmit={getUser}>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={["fas", "fa-user"]} />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="username"
                      value={user.email}
                      onChange={(e) =>
                        setUser({
                          email: e.target.value,
                          password: user.password,
                        })
                      }
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-key"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                      value={user.password}
                      onChange={(e) =>
                        setUser({ email: user.email, password: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <Button
                      type="submit"
                      className="btn btn-warning float-right "
                    >
                      Login
                    </Button>
                  </div>
                </form>
              </div>
              <div className="footer-form">
                <div className="d-flex justify-content-center links">
                  Don't have an account?
                  <Link to="sign-up" onClick={props.loginClose}>
                    Sign Up
                  </Link>
                </div>
                <div className="d-flex justify-content-center">
                  <a href="#">Forgot your password?</a>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </>
    ); 
 
 */
