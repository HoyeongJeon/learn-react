import React, { PureComponent } from "react";

class Test extends PureComponent {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    console.log("렌더링", this.state);
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.counter}</button>
      </div>
    );
  }
}

export default Test;
