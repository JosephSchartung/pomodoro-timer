import React from "react";
import { TodoListItem } from './TodoListItem';

interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo;
    removeTodo: RemoveTodo;
    updateTodo: UpdateTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo, removeTodo, updateTodo }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
                
            ))}
        </ul>
    )
}