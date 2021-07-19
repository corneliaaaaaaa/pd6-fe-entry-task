import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import Edit from "./Edit";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <div className="contetnt">
          <Switch>
            {/* exact:完全符合才enter route */}
            <Route exact path="/" component={Home} />
            <Route path="/create" component={Create} />
            <Route path="/blogs/:id/edit" component={Edit} />
            <Route path="/blogs/:id" component={BlogDetails} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
