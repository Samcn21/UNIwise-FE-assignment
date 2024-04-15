import React, { useState, useEffect } from "react";

// style
import '../style.scss';

// api
import Api from '../../../api/index';

// models
import TodoModels from "../../../models/todo-models";
import TodoModel from "../../../models/todo-model";

// components
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Search from "../../utils/Search"

const Assignment3: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [todos, setTodos] = useState<TodoModel[]>([]);
  const [completedTodos, setCompletedTodos] = useState<TodoModel[]>([]);
  const [incompleteTodos, setIncompleteTodos] = useState<TodoModel[]>([]);
  const [filteredCompletedTodos, setFilteredCompletedTodos] = useState<TodoModel[]>([]);
  const [filteredIncompleteTodos, setFilteredIncompleteTodos] = useState<TodoModel[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      const todos = await fetchTodos();
      setTodos(todos);
      setCompletedTodos(todos.filter(todo => todo.isDone()));
      setIncompleteTodos(todos.filter(todo => !todo.isDone()));
    };

    getTodos();
  }, []);

  useEffect(() => {
    setFilteredCompletedTodos(completedTodos.filter(todo => 
      todo.getTitle().toLowerCase().includes(searchTerm.toLowerCase())
    ));
    
    setFilteredIncompleteTodos(incompleteTodos.filter(todo =>
      todo.getTitle().toLowerCase().includes(searchTerm.toLowerCase())
    ));
  }, [searchTerm, completedTodos, incompleteTodos]);

  const fetchTodos = async () => {
    const todosResponse = await Api.todoApi.getTodos();
    const todoModels = new TodoModels(todosResponse);
    return todoModels.getTodos();
  };

  const fetchTodo = async (id: string) => {
    return await Api.todoApi.getTodo(id);
  };

  const addTodo = async (todo: string) => {
    const response = await Api.todoApi.addTodo({
      title: todo,
      isDone: false
    });
    const todoModel = new TodoModel(response);
    setTodos([...todos, todoModel]);
    if (todoModel.isDone()) {
      setCompletedTodos([...completedTodos, todoModel]);
    } else {
      setIncompleteTodos([...incompleteTodos, todoModel]);
    }
  };

  const toggleTodo = async (id: string, isChecked: boolean) => {
    const todo = await fetchTodo(id);
    const updatedTodo = { ...todo, isDone: isChecked };
    await Api.todoApi.updateTodo(id, updatedTodo);

    const updatedTodos = todos.map(todo =>
      todo.getId() === id ? new TodoModel({
        id: todo.getId(),
        title: todo.getTitle(),
        isDone: !todo.isDone()
      }) : todo
    );

    setTodos(updatedTodos);
    const updatedCompleted = updatedTodos.filter(todo => todo.isDone());
    const updatedIncomplete = updatedTodos.filter(todo => !todo.isDone());
    setCompletedTodos(updatedCompleted);
    setIncompleteTodos(updatedIncomplete);
  }

  const deleteTodo = async (id: string) => {
    await Api.todoApi.deleteTodo(id);
    const updatedTodos = todos.filter((x) => x.getId() !== id);
    setTodos(updatedTodos);
    const updatedCompleted = updatedTodos.filter(todo => todo.isDone());
    const updatedIncomplete = updatedTodos.filter(todo => !todo.isDone());
    setCompletedTodos(updatedCompleted);
    setIncompleteTodos(updatedIncomplete);
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value.toLowerCase());
  };

  return (
    <div id="assignment-3">
      <div className="container">
        <AddTodo onAdd={addTodo} />
      </div>
      <div className="container">
        <Search placeholder="Search Tasks..." searchTerm={searchTerm} onSearch={handleSearch} />
      </div>      
      <div className="container">
        <TodoList todoList={filteredIncompleteTodos} headline={'To Do'} onToggle={toggleTodo} onDelete={deleteTodo} searchTerm={searchTerm} />
      </div>
      <div className="container">
        <TodoList todoList={filteredCompletedTodos} headline={'Completed'} onToggle={toggleTodo} onDelete={deleteTodo} searchTerm={searchTerm} />
      </div>    
    </div>
  );
};

export default Assignment3;
