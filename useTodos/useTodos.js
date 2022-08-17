
const initialState = []
const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || []
}
import { useReducer, useEffect } from "react"
import { todoReducer } from "./todoReducer"

export const useTodo = () =>{

    const [todos, dispatch] = useReducer( todoReducer, initialState, init);
    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify( todos ))
    },[todos])

    const handleNewTodo = ( todo ) =>{
        const action = {
            type:'Add Todo',
            payload:todo
        }
        dispatch( action )
    }

    const heandleDeleteTodo = ( id ) =>{
        dispatch({
            type:'Remove Todo',
            payload:id
        })
    }
    const onToggleTodo = ( id ) =>{
        dispatch({
            type:'Toggle Todo',
            payload:id
        })
    }
    return {
        handleNewTodo,
        heandleDeleteTodo,
        onToggleTodo,
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter((todo)=> !todo.done).length
    }

}