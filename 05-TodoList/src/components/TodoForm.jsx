import React, { useState } from 'react'
import {useTodo} from '../contexts/TodoContext' ;

function TodoForm() {
    const [todo , setTodo ] = useState("");
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault();

        if( ! todo ) return ;
        
        // Here we need pass object because it's funcnality spread and expect object.
        addTodo( { id : Date.now() , todo : todo , completed : false} );
        // addTodo( { todo, completed : false} ); we can also write like this.

        setTodo( "" ); // reset the input field
    }

    return (
        <form  onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} // Wireing
                onChange={ (e) => setTodo( e.target.value ) } // update the state with the input value
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;