import { useState } from "react";
import AllTodos from "./allTodos";
import TodoForm from "./TodoForm";

const Todos = () => {


    const [selectedTodo, setSelectedTodo] = useState(null);

    const handleUpdate = (todo) => {
        setSelectedTodo(todo);
    }


    return (
        <div>

            <TodoForm selectedTodo={selectedTodo} ></TodoForm>

            <AllTodos handleUpdate={handleUpdate}></AllTodos>

        </div>
    );
}

export default Todos;
