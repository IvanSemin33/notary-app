import React from 'react';
import Main from '../Main/Main'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Firebase from 'firebase';
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import config from '../../Database/config';
import ForNotary from '../ForNotary/ForNotary';
import EditPriceList from '../ForNotary/EditPriceList/EditPriceList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class App extends React.Component {

  constructor(props){
    super(props);
    Firebase.initializeApp(config);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Main} />
          <Route path="/for-notary/" component={ForNotary} />
        </div>
      </Router>
    );
  }
}

export default App;
