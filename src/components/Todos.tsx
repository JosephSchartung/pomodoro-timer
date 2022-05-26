import react, { useState } from 'react';

const initialTodos: Todo[] = [];

export const Todos: React.FC = () => {
    const [todos, setTodos] = useState(initialTodos);
    const toggleTodo = (selectedTodo:Todo) => {
        const  newTodos = todos.map( (todo:Todo) => {
            if(todo === selectedTodo) {
                return {
                    ...todo,
                    completed:!todo.completed
                }
            }
            return todo;
        })
        setTodos(newTodos);
    }
    const addTodo: AddTodo = (todoInfo: Todo) => {
        setTodos([...todos, todoInfo]);
    }
    const removeTodo: RemoveTodo = (selectedTodo: Todo) => {
        let newTodos = todos.filter(todo=>{return (todo !== selectedTodo)});
        setTodos(newTodos);
    }
    const updateTodo: UpdateTodo = (selectedTodo: Todo, updatedTodo: Todo) => {
        let newTodos = todos.filter(todo => {return todo!== selectedTodo});
        newTodos.push(updatedTodo);
        setTodos(newTodos);
    }


    return (
        <div className="Todos">

        </div>
    )
} 