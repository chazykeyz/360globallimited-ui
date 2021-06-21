import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./containers/home";
import NavBar from "./components/navBar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
