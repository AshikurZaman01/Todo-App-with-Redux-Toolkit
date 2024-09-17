import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: 1, title: "Learn React", description: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies." },
    { id: 2, title: "Learn Js", description: "JavaScript is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm." },
]

const bookSlice = createSlice({
    name: "BookTodos",
    initialState,

    reducers: {

        addTodo: (state, action) => {
            state.push({
                id: state.length + 1,
                title: action.payload.title,
                description: action.payload.description
            })
        },

        allTodos: (state, action) => {
            return state;
        },

        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id)
        },

        updateTodo: (state, action) => {

            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        title: action.payload.title,
                        description: action.payload.description
                    }
                }
                return todo;
            })

        }
    }
})


export const { addTodo, deleteTodo, allTodos, updateTodo } = bookSlice.actions
export default bookSlice.reducer
