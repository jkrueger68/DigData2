import React from "react";
import Button from 'react-bootstrap/Button';

function Login() {
  return (
    <React.Fragment>
      <div className="card">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height={180}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Image cap"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#868e96" />
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
            Image cap
          </text>
        </svg>
        <div className="card-body">
          <h5 className="card-title text-center">Login</h5>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
              Username:
            </label>
            <div className="col-sm-9">
              <input type="email" className="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">
              Password:
            </label>
            <div className="col-sm-9">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
              />
            </div>
          </div>
          <div className="text-center mb-3">
            <a href="#" className="btn btn-primary">
              Login
            </a>
          </div>
          <div className="text-center mb-3">
            <a href="#" className="btn btn-primary">
              Sign Up
            </a>
          </div>
          <Button variant="primary">Forgot Password</Button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
