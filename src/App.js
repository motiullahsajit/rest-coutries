import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./About/About";
import './App.css';
import Countries from "./components/Countries/Countries";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import Header from "./components/Header/Header";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Countries />
          </Route>
          <Route path="/details">
          <Countries />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Countries />
          </Route>
          <Route path="/country/:countryName">
            <CountryDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
