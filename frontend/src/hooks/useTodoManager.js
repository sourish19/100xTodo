import { useState, useCallback, useMemo } from 'react'

// Custom hook for managing todos
export const useTodoManager = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const addTodo = useCallback((todo) => {
    try {
      setLoading(true)
      setError(null)
      
      if (!todo.todoTitle?.trim()) {
        throw new Error('Todo title is required')
      }
      
      if (!todo.todoDesc?.trim()) {
        throw new Error('Todo description is required')
      }

      setTodos((prev) => [...prev, { ...todo, id: Date.now() }])
    } catch (err) {
      setError(err.message)
      console.error('Error adding todo:', err)
    } finally {
      setLoading(false)
    }
  }, [])


  const editTodo = useCallback((id, updatedTodo) => {
    try {
      setLoading(true)
      setError(null)
      
      if (!updatedTodo.todoTitle?.trim()) {
        throw new Error('Todo title is required')
      }
      
      if (!updatedTodo.todoDesc?.trim()) {
        throw new Error('Todo description is required')
      }

      setTodos((prev) =>
        prev.map((prevVal) =>
          prevVal.id === id ? { ...prevVal, ...updatedTodo } : prevVal
        )
      )
    } catch (err) {
      setError(err.message)
      console.error('Error editing todo:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  const deleteTodo = useCallback((id) => {
    try {
      setLoading(true)
      setError(null)
      
      setTodos((prev) => prev.filter((prevVal) => prevVal.id !== id))
    } catch (err) {
      setError(err.message)
      console.error('Error deleting todo:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  const toggleComplete = useCallback((id) => {
    try {
      setLoading(true)
      setError(null)
      
      setTodos((prev) =>
        prev.map((prevVal) =>
          prevVal.id === id
            ? { ...prevVal, isCompleted: !prevVal.isCompleted }
            : prevVal
        )
      )
    } catch (err) {
      setError(err.message)
      console.error('Error toggling todo:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  const todoStats = ()=>{
    
  }

  // Clear error function
  const clearError = useCallback(() => {
    setError(null)
  }, [])

  return {
    todos,
    loading,
    error,
    addTodo,
    editTodo,
    deleteTodo,
    toggleComplete,
    clearError,
  }
}
