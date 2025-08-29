import { Button } from '../ui/button'
import DeleteTask from './DeleteTask'
import EditTasks from './EditTasks'

function TaskCards() {
  return (
    <div className="my-8 grid min-h-screen w-full grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 xl:grid-cols-3">
      {/* Card */}
      <div className="shadow-input flex h-80 w-72 flex-col rounded-2xl bg-gray-100 font-mono shadow-gray-400">
        {/* Header */}
        <div className="custom-dashed-circle flex justify-between p-3">
          <div className="flex items-center justify-start gap-3">
            <div className="text-2xl font-bold">Heading</div>
            <div className="text-bold w-16 rounded bg-red-700 text-center text-sm text-red-50">
              Tagline
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <DeleteTask />
            <EditTasks />
          </div>
        </div>
        {/* Description*/}
        <div className="flex flex-grow flex-col px-3">
          <div className="no-scrollbar h-50 overflow-auto pt-3 text-sm text-gray-700">
            Description Lorem ipsum dolor sit amet, consectetur
          </div>
          {/* Button */}
          <div className="mt-auto text-center pb-3">
            <Button className=" bg-teal-400 font-bold whitespace-normal hover:bg-teal-500">
              Mark as Completed
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCards
