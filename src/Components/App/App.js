import React from "react";
import Main from "../Main/Main";
import Firebase from "firebase";
import config from "../../Database/config";
import ForNotary from "../ForNotary/ForNotary";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
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
