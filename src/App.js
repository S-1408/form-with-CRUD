import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Navbar from "./components/layout/Navbar";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import NotFound from "./components/pages/NotFound";
import ViewUser from "./users/ViewUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/users/addUser' component={AddUser} />
          <Route exact path='/users/editUser/:id' component={EditUser} />
          <Route exact path='/users/:id' component={ViewUser} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
