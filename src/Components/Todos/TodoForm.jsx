import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../features/todoSlice/todoSlice";

const TodoForm = ({ selectedTodo }) => {



    const dispatch = useDispatch();

    const titleRef = useRef();
    const descriptionRef = useRef();

    useEffect(() => {
        if (selectedTodo) {
            titleRef.current.value = selectedTodo.title;
            descriptionRef.current.value = selectedTodo.description;
        }
    }, [selectedTodo])

    const submitHandler = (e) => {
        e.preventDefault();

        const title = titleRef.current.value;
        const description = descriptionRef.current.value;

        if (title.trim() === "" || description.trim() === "") {
            alert("Both fields are required!");
            return;
        }

        const todosData = {
            title: title,
            description: description
        }

        if (selectedTodo) {
            dispatch(updateTodo({ id: selectedTodo.id, ...todosData }));
            alert("Todo updated successfully!");
        } else {
            dispatch(addTodo(todosData));
            alert("Todo added successfully!");
        }

        // Clear input fields
        titleRef.current.value = "";
        descriptionRef.current.value = "";

    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Add a New Todo</h2>
            <form className="space-y-4" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-600">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        ref={titleRef}
                        placeholder="Enter your todo"
                        className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        ref={descriptionRef}
                        placeholder="Enter a description"
                        rows="4"
                        className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        {selectedTodo ? "Update Todo" : "Add Todo"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TodoForm;
