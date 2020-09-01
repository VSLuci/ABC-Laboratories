import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import "../FontAwesome/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/common.css";

function LogIn() {

  return (
    <div className="container-full">
      <div className="bg-circle-1"></div>
      <div className="bg-circle-2"></div>
      <div className="bg-circle-3"></div>
      <div className="bg-circle-4"></div>

      {/* Google font loader applying */}
      <GoogleFontLoader
        fonts={[
          {
            font: 'Playfair Display',
            weights: [500, 700],
          },
          {
            font: 'Abril Fatface',
            weights: [400, 700],
          },
        ]}
        subsets={['cyrillic-ext', 'greek']}
      />
      <div className="container col-6 fixed-top shadow mt-5 h-75 mb-4 bg-white">
        <h1 className="mt-4 ml-4">Login</h1>
        <form className="text-center" action='' method='post'>
          <br /><br /><br />

          {/* Email field */}
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon="envelope" />
              </span>
            </div>
            <input style={{ fontFamily: 'Playfair Display, serif' }}
              name=""
              className="form-control"
              placeholder="Email address"
              type="email"
            />
          </div>

          {/* Password field */}
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon="lock" />
              </span>
            </div>
            <input style={{ fontFamily: 'Playfair Display, serif' }}
              name=""
              className="form-control"
              placeholder="Password"
              type="password"
            />
          </div>
          <br />

          {/* Submit button */}
          <div className="text-center">
            <button className="btn btn-secondary btn-lg btn-block btn-login" type='submit' style={{ fontFamily: 'Abril Fatface, cursive' }}>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
