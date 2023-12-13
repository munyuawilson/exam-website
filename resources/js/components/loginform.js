import React from 'react';
import "/css/app.css";


export default function LoginForm(){


    return (
        <div>
            <div className="row custom-margin pt-5 mt-5">
  <div className="col-md-5 mx-auto box-shadow ">
    <h3 className="text-center">Log In</h3>
    <div className="col-md-12">
      <form role="form" action="login.php" method="POST">
        <div className="form-group row">
          <label
            htmlFor="inputEmail3"
            className="col-sm-3 col-form-label text-muted"
          >
            Email
          </label>
          <div className="col-sm-9">
            <input
              type="email"
              name="email"
              className="form-control"
              id="inputEmail3"
              placeholder="Email"
              required=""
              autoComplete='email'
            />
          </div>
        </div>
        <div className="form-group row mt-3">
          <label
            htmlFor="inputPassword3"
            className="col-sm-3 col-form-label text-muted"
          >
            Password
          </label>
          <div className="col-sm-9">
            <input
              type="password"
              name="password"
              className="form-control"
              id="inputPassword3"
              placeholder="Password"
              required=""
            />
            <div className="form-group row mt-3">
          <div className="pw pd-3 md-3">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </div>
            <small>
              <a href="forgot.php">Forgot Password</a>
            </small>
            <small>
              <br/>
              <a href="create.php">Sign-Up</a>
            </small>
          </div>
        </div>
        
      </form>
    </div>
  </div>
</div>

        </div>
    )
};