import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { allTodos, deleteTodo } from '../../features/todoSlice/todoSlice';

const AllTodos = ({ handleUpdate }) => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.bookTodos);
    const [deletedTodo, setDeletedTodo] = useState(null);

    useEffect(() => {
        dispatch(allTodos());
    }, [dispatch]);

    const handleDelete = async (id) => {
        try {
            await dispatch(deleteTodo({ id }));
            setDeletedTodo(id);
        } catch (error) {
            alert("Error deleting todo");
        }
    };

    return (
        <div className="mx-auto mt-6" style={{ width: '500px' }}>
            <h2 className="text-xl font-bold mb-4 text-center">All Todos</h2>
            <AnimatePresence>
                {todos.map((todo) => (
                    todo.id !== deletedTodo && (
                        <motion.div
                            key={todo.id}
                            className="p-4 border rounded-md mb-4 shadow-lg bg-white"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="font-bold text-lg">{todo.title}</h3>
                            <p className="mb-2">{todo.description}</p>

                            <div className="flex justify-between">
                                <button
                                    onClick={() => handleUpdate(todo)}
                                    className="bg-yellow-400 text-white px-4 py-1 rounded-md hover:bg-yellow-500 transition"
                                >
                                    Update
                                </button>
                                <button
                                    className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition"
                                    onClick={() => handleDelete(todo.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </motion.div>
                    )
                ))}
            </AnimatePresence>
        </div>
    );
};

export default AllTodos;
