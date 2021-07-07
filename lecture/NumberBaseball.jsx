import React from "react";

function getNumbers() {
  //숫자 네 개를 랜덤하게 뽑는 함수...
}

class NumberBaseball extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      value: "",
      answer: getNumbers(), // 나중에 만들것..
      try: [],
    };
  }

  onSubmitForm = () => {};

  onChangeInput = () => {};

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            maxLength={4}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
        </form>
        <div>시도: {this.state.try.lenght}</div>
        <ul>
          {["사과", "바나나", "감", "복숭아", "배", "밤"].map((v) => {
            return <li>{v}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball; // -> import NumberBaseball
