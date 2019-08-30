import React, { Component } from "react";
import Counter from "./counter";

// passing attributes to componentes
// <Counter key={counter.id} value={counter.value} selected={true} />
// inside counter component you can access all attributes through this.props, except for the key attribute
// if you set a attribute with no value it will be automatically set to true
// react does not allow you to change the value of props like "this.props.value = 1"

// children - when we want to pass complex objects to other components
// <Counter key={counter.id} value={counter.value}>
//   <h4>Counter #{counter.id}</h4>
// </Counter>
// if you want to pass an element inside, it will be available as this.props.children
// you can use {this.props.children} to render

// lifting the state up
// if we want to share counters with another component that is not
// a relation parent/children we have to move the counters to the next
// parent for both and then share like fater/children above
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters }); // this a shortcut to {counters: counters}
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
