import React from 'react';
import Main from '../Main/Main'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Firebase from 'firebase';
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import config from '../../Database/config';


class App extends React.Component {

  constructor(props){
    super(props);
    Firebase.initializeApp(config);
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
             <Main/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
