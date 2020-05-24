import React from 'react';
import {Route,Redirect,Switch} from 'react-router-dom';
import LoginForm from "./component/loginForm";
import RegisterForm from "./component/registerForm";
import Notfound from "./component/notFound";
import TempleInfo from "./component/templeInfo";
import IdolInfo from "./component/idolInfo";
import Aboutus from "./component/aboutus";
import NavigationBar from "./component/navigationBar";
import MainPage from "./component/mainPage";
import './App.css';

function App() {
  return (
    <React.Fragment>
        <NavigationBar />
        <Switch>
            <Route path="/temples" component={TempleInfo} />
            <Route path ="/idols" component={IdolInfo}/>
            <Route path="/about" component={Aboutus} />
            <Route path="/login" component={LoginForm} />
            <Route path= "/register" component={RegisterForm} />
            <Route path="/main" component={MainPage}/>
            <Route path="/not-found" component={Notfound}/>
            <Redirect from ="/" exact to="/main" />
            <Redirect to="/not-found" />
        </Switch>
    </React.Fragment>
  );
}

export default App;
