import React, { FunctionComponent, useState } from "react";

// types
interface InputProps {
  onAdd: (todo: string) => void;
}

const AddTodo: FunctionComponent<InputProps> = ({ onAdd }) => {
  // states
  const [todo, setTodo] = useState('');

  // functions
  const submitForm = (event: any) => {
      event.preventDefault();

      if (!todo) {
          return;
      }

      onAdd(todo);
      setTodo('')
  }

  return (
    <form className="add-todo__container" onSubmit={submitForm}>
      <div className="form-row search-field__input-container">
        <input
          type="text"
          className="input-field"
          name="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add Todo"
        />
      </div>
      <div className="form-row search-field__button-container">
        <button className="button">Add Todo</button>
      </div>
    </form>
  );
};

export default AddTodo;