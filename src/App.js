import React, { Component } from "react";
import Navbar from "./components/navbar";

// since counter is default export we dont need
// to use single quotes around it
import Counters from "./components/counters";

import "./App.css";

// lifecycle hooks - OBS: dont work with stateless functional component
// if we want to add behaviour during component criation
// Mount fase: contructor, render, componentDidMount
// if you need to set the state in the constructor, dont use setState, use this.state
// to have access to props in the constructor
// contructor(props) { super(props) }
// componentDidMount is the best place to do ajax calls to get your data
// render when this runs, it renders all its childrens recursively

// Update fase: render, componentDidUpdate(when props or state changes)
// componentDidMount(prevProps, PrevState)
// you can check for change to to ajax calls

// UnMount fase: componentWillUnmount(before is removed from the dom)

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
