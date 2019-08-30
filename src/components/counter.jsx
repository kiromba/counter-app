// user camel case lowercase for creation of file
import React, { Component } from "react";

// jsx compiles to React.createElement
// that is why we need to import React job on the top
// even though we are not explicity calling
class Counter extends Component {
  // state includes any data that this component needs
  // state = {
  //  count: this.props.counter.value,
  //  tags: []
  // };

  // you dont have access to "this" yet, so to solve
  // this you can turn this method to a arrow method
  // in react we dont update the state directly
  // if you do this this.state.count++ nothing is going to change
  // because react is not aware of that change, you need explicitly tell react about that with setState
  // use the method inherited from the base react, example down below
  // when you call setState react schedule the render method to run in the future, we dont know when, it is a assyncronous function
  // handleIncrement = () => {
  //  this.setState({ count: this.state.count + 1 });
  // };

  render() {
    // react.createElement does not know what to return if you add
    // two different elements side by side
    // return <span>Hello World</span><button>Increment</button>;
    // you have two choices: wrap with a <div> or with a <React.Fragment>

    // if you return method has more than one line, you should add
    // parenthesis because then the compiler will not add a ; right after the return in the same line
    // example: return ;

    // inside {} you can write any valid JS expression, like 2 * 2 or even a function/method

    // inside JSX, everything inside double quotes are rendered as plain text, so if you want to use
    // dinamically attributes <img src={}> put inside brackets

    // class attributes cannot be used because they are reserverd words for javascript, so we use className instead

    // if you want to set style directly to the element you can create do like this:
    // styles = {fontSiz e:10, fontWeight: "bold"}
    // <span style={styles}>
    // or you can do inline <span style={{fontSize:30}}>

    // since JSX is not a engine, you dont have the concept of loops inside of it
    // so you have to use {} to run dinamically values
    // use map to assign the value to each element, simple as that
    // <ul>
    //  {this.state.tags.map(tag => (<li key={your_id}>{tag}</li>))}
    // </ul>
    // when using map function, for each item you need to set the key attribute
    // this key attribute is unique(only in that list) and is required for the virtual DOM keep sync with the DOM for
    // each change inside the item

    // {state === 9 && "hi" } javascript evaluates to true and return the last condition
    // you can use that to render conditional string

    // with events you can only pass the reference of a method, so if you dont want pass parameters
    // you can do onClick={this.handleIncrement} but if you do want to pass parameters
    // you cant do this onClick={this.handleIncrement(id)}
    // the best way is to use inline function passing a arrow function between {}
    // onClick={() => {this.handleIncrement({id:1})}}

    // raise and handle event
    // if i want to modify a state of another compoment from this component,
    // i need to handle the event here, but this event is raised in its own component
    // example: counter has onDelete(raise) and counters has(handleDelete)
    // <button onClick={this.props.onDelete} raise an event that is handled by other component
    // onClick={() => this.props.onDelete(this.props.id)} this is how you pass parameters

    // controlled component is a component which has no state and all data is passing using props
    // we let the parent component handle everything
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { value } = this.props.counter; // store state inside count

    // you can return JSX element as normal JS expression
    // const x = <h1>Zero</h1>;
    // return count == 0 ? <h1>Zero</h1> : count

    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-"; // use let when the value might change
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

// you can remove this line and use
// export default class Counter... on the class signature
export default Counter;
