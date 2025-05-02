import { createContext , useContext } from "react";

export const TodoContext = createContext({
    Todos : [
        // { 
        //     id : 1 ,
        //     msg : "todo message ",
        //     completed : false ,
        // },
    ],
    addTodo : (todo) => {},
    updateTodo : ( id ,todo ) => {},
    deleteTodo : ( id ) => {},
    toggleComplete : ( id ) => {},
});

export const useTodo = () => {
    const context = useContext(TodoContext)
    if (!context) {
        throw new Error('useTodo must be used within TodoProvider')
    }
    return context
}

export const TodoProvider = TodoContext.Provider 