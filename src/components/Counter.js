import React from "react";


class Counter extends React.Component {
 
  state = {
    count: 0
  };
  handleIncrement = () => {
  
    this.setState({ count: this.state.count + 1 });

    // *****also need to update the state of the img array. if image is clicked, add a class to it
  };
  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
          {/* <img src= {this.props.source} onClick={this.handleIncrement}></img> */}
        </div>
      </div>
    );
  }
}
export default Counter;