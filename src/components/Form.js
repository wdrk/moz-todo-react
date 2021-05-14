import React from "react";

function Form(props) {
  function handleSubmit(e) {
    e.preventDefault(); /* 버튼을 눌렀을 때 페이지를 다시 로딩하는 것을 막음 */
    props.addTask("Say hello!");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
