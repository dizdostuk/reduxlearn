import React, { Component } from "react";
import { connect } from "react-redux";
import { incCounter } from "./actions/increment";
import "./App.css";

/*store.subscribe(() => {
  list.innerHTML = '';
  trackInput.value = '';
  store.getState().forEach(track => {
    const li = document.createElement("li");
    li.textContent = track;
    list.appendChild(li);
  })
})*/

class App extends Component {
  render() {
    const { counter, setCount } = this.props;
    return (
      <div>
        <span>{ counter }</span>
        <button id="button">Submit</button>
        <ul className="list" />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCount: count => dispatch(incCounter(count)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
