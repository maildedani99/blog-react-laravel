import "./App.css";
import Navbar from './components/navbar/navbar';
import Login from "./pages/login/login";
import ShowPosts from './pages/showPosts/showposts';
import PostForm from './pages/postform/postform';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Navbar  />
        <Switch>
        <Route exact path="/">
        <ShowPosts />
          </Route>
          <Route exact path="/postform">
        <PostForm />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
