const React = require("react");
const { useState, useRef } = React;

const WordRelay = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);
  const [word, setWord] = useState("전호영");

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("딩동댕");
      setWord(value);
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("땡");
      setValue("");
      inputRef.current.focus();
    }
  };

  const onChnageInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="wordInput">글자를 입력하세요</label>
        <input
          className="wordInput"
          ref={inputRef}
          value={value}
          onChange={onChnageInput}
        />
        <button>입력!!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
