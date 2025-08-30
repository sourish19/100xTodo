import { createContext, useContext } from 'react'

export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  editTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
})

export const TodoContextProvider = TodoContext.Provider

export default function useTodo() {
  return useContext(TodoContext)
}

