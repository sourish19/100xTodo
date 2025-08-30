import { TaskForm } from '../index'
import { Button } from '../ui/button'
import DeleteTask from './DeleteTask'
import { Badge } from '@/components/ui/badge'

import { useTodo } from '@/context'

function TaskCards() {
  const { todos, toggleComplete } = useTodo()

  const handleToggleComplete = (id) => {
    toggleComplete(id)
  }

  return (
    <div className="my-8 grid min-h-screen w-full grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 xl:grid-cols-3">
      {todos && todos.length ? (
        todos.map((todo) => (
          <div
            key={todo.id}
            className={`shadow-input flex h-75 w-72 flex-col rounded-2xl ${todo.isCompleted ? 'bg-emerald-100' : 'bg-gray-100'} font-mono shadow-gray-400 hover:scale-99 transition-all duration-200 ease-in-out`}
          >
            {/* Header */}
            <div className="custom-dashed-circle flex justify-between p-3">
              <div className="flex items-center justify-start gap-3">
                <div
                  className={`text-2xl font-bold tracking-tight text-shadow-lg ${todo.isCompleted ? 'line-through decoration-sky-400 decoration-2' : ''}`}
                >
                  {todo.todoTitle}
                </div>
                <Badge variant="default">{todo.todoPriority}</Badge>
              </div>
              <div className="flex items-center justify-center gap-5">
                <DeleteTask id={todo.id} />
                <TaskForm
                  mode="edit"
                  dialogTitle="Edit Tasks"
                  dialogDesc="Make your changes here."
                  id={todo.id}
                  completed={todo.isCompleted}
                />
              </div>
            </div>
            {/* Description*/}
            <div className="flex flex-grow flex-col px-3">
              <div
                className={`no-scrollbar h-50 overflow-auto pt-3 text-sm text-gray-700 ${todo.isCompleted ? 'line-through decoration-sky-400 decoration-2' : ''}`}
              >
                {todo.todoDesc}
              </div>
              {/* Button */}
              <div className="mt-auto pb-3 text-center">
                <Button
                  onClick={() => handleToggleComplete(todo.id)}
                  className="shadow-input cursor-pointer bg-teal-400 font-bold whitespace-normal text-shadow-sm hover:bg-teal-500"
                >
                  {todo.isCompleted ? 'Completed' : 'Mark as Complete'}
                </Button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="font-poppins my-8 w-100 bg-gradient-to-r from-pink-500 via-blue-600 to-purple-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent text-shadow-lg">
          No Tasks Found...
        </div>
      )}
    </div>
  )
}

export default TaskCards
