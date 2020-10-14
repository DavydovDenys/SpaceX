import React, {Component} from 'react'


import Features from "./components/Features/Features";

import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FetchData from "./service/FetchData";
import './style.css'



class App extends Component {
  fetchData = new FetchData();

  state = {
    rocket: 'Falcon1',
    rocketFeatures: null
  };

  componentDidMount() {

  }

  updateRocket() {
    console.log(this.state)
    this.fetchData.getRocket()
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => this.setState({rocketFeatures}));
    console.log(this.state)
  }

  render() {
    return(
      <React.Fragment>
        <Header/>
        <Main rocket={this.state.rocket}/>
        <Features/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
