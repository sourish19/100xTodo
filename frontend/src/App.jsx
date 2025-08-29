import { useState } from 'react'

import TodoLayout from './layouts/TodoLayout'
import { TaskStats, TaskCards, TaskForm } from './components'
import { TodoContextProvider } from './context'

const App = () => {
  const [todos, setTodos] = useState([])

  // Add Todo
  const addTodo = (todo) => setTodos((prev) => [...prev, todo])

  // Edit Todo
  const editTodo = (id, todo) =>
    setTodos((prev) => {
      prev.map((prevVal) => {
        prevVal.id === id ? todo : prevVal
      })
    })

  // Delete Todo
  const deleteTodo = (id) =>
    setTodos((prev) => {
      prev.filter((prevVal) => prevVal.id !== id)
    })

  // Togle Complete
  const togleComplete = (id) =>
    setTodos((prev) =>
      prev.map((prevVal) =>
        prevVal.id === id
          ? { ...prevVal, isCompleted: !prevVal.isCompleted }
          : prevVal
      )
    )

  return (
    <TodoContextProvider
      value={{
        todos,
        addTodo,
        editTodo,
        deleteTodo,
        togleComplete,
      }}
    >
      <TodoLayout>
        <div>
          <TaskForm
            mode="add"
            dialogTitle="Add Tasks"
            dialogDesc=" Add your tasks here. You can edit or delete them later."
            id=""
          />
          <TaskCards />
        </div>
        <TaskStats
          fieldNumber={[
            { name: 'Total Tasks', color: 'bg-red-400' },
            { name: 'Complete Tasks', color: 'bg-purple-400' },
            { name: 'Delete Tasks', color: 'bg-blue-400' },
          ]}
        />
      </TodoLayout>
    </TodoContextProvider>
  )
}

export default App
