import Header from "./Components/Header";
import Landing from "./Components/Landing";
import Registar from "./Components/Registar";
import SignIn from "./Components/SignIn";
import Template from "./Components/Template";
import About from "./Components/About";
import { Switch, Route } from "react-router-dom";



function App() {
  return (
    <div>
    <Header></Header>
    <Switch>
    <Route path="/" exact>
      <Landing></Landing>
    </Route>
    <Route path="/registar" exact>
      <Registar></Registar>
    </Route>
    <Route path="/signin" exact>
      <SignIn></SignIn>
    </Route>
    <Route path="/Template" exact>
      <Template></Template>
    </Route>
    <Route path="/about" exact>
      <About></About>
    </Route>


    </Switch>
   
    </div>
  );
}

export default App;
