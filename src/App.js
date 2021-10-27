import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Error from "./components/Error";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact}>
            <Contact />
          </Route>
          <Route path="/users/add" component={AddUser} />
          <Route path="/users/edit/:id" children={<EditUser />} />
          <Route component={Error}>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
