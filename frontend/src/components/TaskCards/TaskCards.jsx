import { TaskForm } from '../index'
import { Button } from '../ui/button'
import DeleteTask from './DeleteTask'

import { useTodo } from '@/context'

function TaskCards() {
  const { todos } = useTodo()

  return (
    <div className="my-8 grid min-h-screen w-full grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 xl:grid-cols-3">
      {todos && todos.length
        ? todos.map((todo) => (
            <div
              key={todo.id}
              className="shadow-input flex h-80 w-72 flex-col rounded-2xl bg-gray-100 font-mono shadow-gray-400"
            >
              {/* Header */}
              <div className="custom-dashed-circle flex justify-between p-3">
                <div className="flex items-center justify-start gap-3">
                  <div className="text-2xl font-bold">{todo.todoTitle}</div>
                  <div className="text-bold w-16 rounded bg-red-700 text-center text-sm text-red-50">
                    {todo.todoPriority}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-5">
                  <DeleteTask id={todo.id} />
                  <TaskForm
                    mode="edit"
                    dialogTitle="Edit Tasks"
                    dialogDesc="Make your changes here."
                    id={todo.id}
                  />
                </div>
              </div>
              {/* Description*/}
              <div className="flex flex-grow flex-col px-3">
                <div className="no-scrollbar h-50 overflow-auto pt-3 text-sm text-gray-700">
                  {todo.todoDesc}
                </div>
                {/* Button */}
                <div className="mt-auto pb-3 text-center">
                  <Button className="bg-teal-400 font-bold whitespace-normal hover:bg-teal-500">
                    Mark as Completed
                  </Button>
                </div>
              </div>
            </div>
          ))
        : <div className='w-100'>
          <h1 className='text-3xl font-bold my-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-600 to-purple-500 text-shadow-lg font-poppins w-full'>No Tasks Found...</h1>
        </div> }
    </div>
  )
}

export default TaskCards
