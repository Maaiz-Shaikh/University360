import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import MyNotes from './screens/MyNotes/MyNotes';
import LoginScreen from "./screens/LoginScreens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreens/RegisterScreen";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <main>

        <Route exact path='/' component={LandingPage} />
        <Route exact path='/login' component={LoginScreen} />
        <Route exact path='/register' component={RegisterScreen} />
        <Route path='/mynotes' component={MyNotes} />
      </main>
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
