import React, { FunctionComponent } from "react";

// components
import Todo from "./Todo";

// models
import TodoModel from "../../../models/todo-model";

// types
interface ListProps {
  todoList: TodoModel[];
  headline: string;
  searchTerm: string;
  onToggle: (id: string, isChecked: boolean) => void;
  onDelete: (id: string) => void;
}

const List: FunctionComponent<ListProps> = ({ todoList, headline, searchTerm, onToggle, onDelete }) => {
  const handleToggle = (id: string, isChecked: boolean) => {
    onToggle(id, isChecked);
  };

  const handleDelete = (id: string) => {
    onDelete(id);
  };

  return (
    <>
      <h2>{headline} ({todoList.length})</h2>
      <div>
        {todoList.map((todo: TodoModel) => (
          <Todo key={todo.getId()} todo={todo} onToggle={handleToggle} onDelete={handleDelete} searchTerm={searchTerm}/>
        ))}
      </div>
    </>
  );
};

export default List;
