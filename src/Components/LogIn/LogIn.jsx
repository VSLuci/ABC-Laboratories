import React, { Component } from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "../css/common.css";
import { Form, Button, InputGroup } from 'react-bootstrap'
import { login } from "../../API/authAPI";

class LogIn extends Component {

  onSubmit = async ({ email, password }) => {
    const { history } = this.props;

    await login({ email, password, history });
  }

  render() {
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
            {
              font: 'Abril Fatface',
              weights: [400, 700],
            },
          ]}
          subsets={['cyrillic-ext', 'greek']}
        />

        <div className="container col-6 fixed-top shadow mt-5 h-75 mb-4 bg-white">
          <h1 className="mt-4 ml-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Login
          </h1>

          <Form
            className="text-center"
            onSubmit={this.onSubmit}
            method='post'
          >

            <InputGroup className="mt-5 mb-4">
              <InputGroup.Prepend>
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </InputGroup.Prepend>
              <Form.Control
                style={{ fontFamily: 'Playfair Display, serif' }}
                className="form-control"
                type="email"
                placeholder="Email address"
                required
              />
            </InputGroup>

            <InputGroup className="mb-4">
              <InputGroup.Prepend>
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faLock} />
                </span>
              </InputGroup.Prepend>
              <Form.Control
                style={{ fontFamily: 'Playfair Display, serif' }}
                className="form-control"
                type="password"
                placeholder="Password"
                required
              />
            </InputGroup>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                style={{ fontFamily: 'Eagle Lake, serif' }}
                type="checkbox"
                label="Stay signed in"
              />
            </Form.Group>

            <Button
              variant="btn btn-secondary mt-5 btn-lg btn-block btn-login"
              style={{ fontFamily: 'Abril Fatface, cursive' }}
              type="submit"
            >
              Submit
            </Button>

          </Form>

          <Form method='post'>

            <Button
              variant="outline-info btn-register mt-5 btn-lg btn-block"
              style={{ fontFamily: 'Abril Fatface, cursive' }}
              type="submit"
            >
              Create an account
            </Button>

          </Form>

        </div>
      </div>
    );
  }
}

// function LogIn(props) {

//   return (
//     <div className="container-full">
//       <div className="bg-circle-1"></div>
//       <div className="bg-circle-2"></div>
//       <div className="bg-circle-3"></div>
//       <div className="bg-circle-4"></div>

//       {/* Google font loader applying */console.log(props)}
//       <GoogleFontLoader
//         fonts={[
//           {
//             font: 'Playfair Display',
//             weights: [500, 700],
//           },
//           {
//             font: 'Abril Fatface',
//             weights: [400, 700],
//           },
//           {
//             font: 'Abril Fatface',
//             weights: [400, 700],
//           },
//         ]}
//         subsets={['cyrillic-ext', 'greek']}
//       />

//       <div className="container col-6 fixed-top shadow mt-5 h-75 mb-4 bg-white">
//         <h1 className="mt-4 ml-4"
//           style={{ fontFamily: 'Playfair Display, serif' }}
//         >
//           Login
//         </h1>

//         <Form className="text-center" action='' method='post'>

//           <InputGroup className="mt-5 mb-4">
//             <InputGroup.Prepend>
//               <span className="input-group-text">
//                 <FontAwesomeIcon icon="envelope" />
//               </span>
//             </InputGroup.Prepend>
//             <Form.Control
//               style={{ fontFamily: 'Playfair Display, serif' }}
//               type="email"
//               placeholder="Email address"
//             />
//           </InputGroup>

//           <InputGroup className="mb-4">
//             <InputGroup.Prepend>
//               <span className="input-group-text">
//                 <FontAwesomeIcon icon="lock" />
//               </span>
//             </InputGroup.Prepend>
//             <Form.Control
//               style={{ fontFamily: 'Playfair Display, serif' }}
//               type="password"
//               placeholder="Password"
//             />
//           </InputGroup>

//           <Form.Group controlId="formBasicCheckbox">
//             <Form.Check
//               style={{ fontFamily: 'Eagle Lake, serif' }}
//               type="checkbox"
//               label="Stay signed in"
//             />
//           </Form.Group>

//           <Button
//             variant="btn btn-secondary mt-5 btn-lg btn-block btn-login"
//             style={{ fontFamily: 'Abril Fatface, cursive' }}
//             type="submit"
//           >
//             Submit
//           </Button>

//         </Form>

//       </div>
//     </div>
//   );
// }

export default LogIn;
