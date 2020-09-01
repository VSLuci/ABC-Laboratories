import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import "../FontAwesome/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/common.css";
import { Form, Button, InputGroup } from 'react-bootstrap'

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

        <Form className="text-center" action='' method='post'>
          <br />

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <span className="input-group-text">
                <FontAwesomeIcon icon="envelope" />
              </span>
            </InputGroup.Prepend>
            <Form.Control
              style={{ fontFamily: 'Playfair Display, serif' }}
              type="email"
              placeholder="Email address"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <span className="input-group-text">
                <FontAwesomeIcon icon="lock" />
              </span>
            </InputGroup.Prepend>
            <Form.Control
              style={{ fontFamily: 'Playfair Display, serif' }}
              type="password"
              placeholder="Password"
            />
          </InputGroup>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Stay signed in"
            />
          </Form.Group>

          <Button
            variant="btn btn-secondary btn-lg btn-block btn-login"
            style={{ fontFamily: 'Abril Fatface, cursive' }}
            type="submit"
          >
            Submit
          </Button>

        </Form>

      </div>
    </div>
  );
}

export default LogIn;
