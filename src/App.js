import React, {Component} from 'react'


import Features from "./components/Features/Features";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Calendar from "./components/Calendar/Calendar";
import Footer from "./components/Footer/Footer";
import FetchData from "./service/FetchData";
import './style.css'
import Details from "./components/Details/Details";



class App extends Component {
  fetchData = new FetchData();


  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: [],
    company: null
  };


  componentDidMount() {
    this.updateRocket();
    this.updateCompany();
  }

  updateRocket() {
    this.fetchData.getRocket()
      .then(data => {
        this.setState({rockets: data.map(item => item.name)});
        return data;
      })
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => {this.setState({rocketFeatures}) });

  }

  changeRocketHandler = (rocket) => {
    this.setState({rocket: rocket},this.updateRocket);
  }

  updateCompany () {
    this.fetchData.getCompany()
      .then(company =>
        this.setState({company}));

  }

  render() {

    return(
      <BrowserRouter>
        <Header changeRocket={this.changeRocketHandler} rockets={this.state.rockets}/>
        <Route
          exact path='/'
          render={() => this.state.company && <Home company={this.state.company}/>}/>

        <Route
          path='/rocket'
          render={() => this.state.rocketFeatures
            &&
          <Features rocketFeatures={this.state.rocketFeatures}/>}/>



        <Route path='/calendar' component={Calendar}/>
        <Route path='/details/:id' component={Details}/>


        {this.state.company && <Footer {...this.state.company}/>}
      </BrowserRouter>
    );
  }
}

export default App;
