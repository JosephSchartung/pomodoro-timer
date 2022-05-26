import React, { useState } from "react";

interface Props {
    todo: Todo;
    updateTodo: UpdateTodo
}

export const UpdateTodoListItem: React.FC<Props> = ({ todo, updateTodo}) => {
    const [upTodo, setUpTodo] = useState(todo);
    return (
        <div className="UpdateTodoListItem">
            
        </div>
    )
}