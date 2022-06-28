import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  padding: "15px",
  margin: "15px",
  borderRadius: "5px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="ToDo"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
