import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faTrash } from '@fortawesome/free-solid-svg-icons'; // Import the trash icon

// models
import TodoModel from "../../../models/todo-model";

// types
interface ItemProps {
  todo: TodoModel;
  searchTerm: string;
  onToggle: (id: string, isChecked: boolean) => void;
  onDelete: (id: string) => void; 
}

const Todo: FunctionComponent<ItemProps> = ({ todo, searchTerm, onToggle, onDelete }) => {
  const highlightSearchTerm = (word: string) => {
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return word.replace(regex, '<span class="highlight-search-term">$1</span>');
  };

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.currentTarget.checked;
    onToggle(todo.getId(), isChecked);
  };

  const handleDelete = () => {
    onDelete(todo.getId());
  };

  return (
    <div className="todo-card">
      <div className="checkbox__container">
        <input className="checkbox" type="checkbox" checked={todo.isDone()} onChange={handleToggle} />
      </div>
      <div className="task__container">
        <span dangerouslySetInnerHTML={{ __html: highlightSearchTerm(todo.getTitle()) }} className={`${todo.isDone() ? 'strike-through' : ''}`}></span>
      </div>
      <div className="delete__container">
        <FontAwesomeIcon icon={faTrash} onClick={handleDelete} className="delete-icon" />
      </div>
    </div>
  );
};

export default Todo;