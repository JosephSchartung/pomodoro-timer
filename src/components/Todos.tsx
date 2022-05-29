import react, { useState } from 'react';
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
        setTodos(newTodos);
    }


    return (

        <div className="container valign-wrapper center-align">
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title black-text">
                                <b>Tasks</b>
                            </span>
                            <div className="row">
                                <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
                            </div>
                        </div>
                        <div className="card-action">
                            <AddTodoForm addTodo={addTodo}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        // <div className="Todos">
        //     <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        //     <AddTodoForm addTodo={addTodo} />
        // </div>
    )
} 