import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./Layout";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Layout} />
        <Route exact path="/:userAddress" component={Layout} />
      </Switch>
    </Router>
  );
};

export default App;
