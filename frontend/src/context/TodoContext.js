import { createContext, useContext } from 'react'

export const TodoContext = createContext({
  todos: [
    {
      id: '',
      todoTitle: '',
      todoDesc: '',
      todoPriority: '',
      isCompleted: false,
    },
  ],
  addTodo: (todo) => {},
  editTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  togleComplete: (id) => {},
})

export const TodoContextProvider = TodoContext.Provider

export default function useTodo () {
  return useContext(TodoContext)
}
