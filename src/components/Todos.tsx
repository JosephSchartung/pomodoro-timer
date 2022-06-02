import React, { useState } from 'react';
import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';

const initialTodos: Todo[] = [
    {
        description:"Write app",
        completed:false,
        id:Date.now()
    },
    {
        description:"Fix all the bugs",
        completed:true,
        id:Date.now()
    }
];

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
        newTodos.sort(compareTodos)
        setTodos(newTodos);
    }

    const compareTodos = (a: Todo, b: Todo) => {
        return a.id > b.id ? 1 : -1;
    }


    return (
        <div style={{width:"33em"}} className="container">
            <div className="row">
                <div style={{borderRadius:"20px"}}className="card center-align red">
                    <div className="card-content">
                        <span className="card-title center-align white-text">
                            <b>Set</b> Your Tasks
                        </span>
                        <div style={{borderRadius:"20px", margin:"auto", width:"50%", display:"flex", justifyContent:"center", padding:"10px"}} className="card-panel red accent-2">
                            <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
                        </div>

                        <div className="card-action">
                            <AddTodoForm addTodo={addTodo} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 