import { Trash, Pencil } from 'lucide-react'
import { Button } from '../ui/button'
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
        <Trash className="h-5 w-5" />
        <Pencil className="h-5 w-5" />
      </div>
    </div>

    {/* Content */}
    <div className="flex flex-col flex-grow px-3">
      {/* Description (truncate with no scrollbars) */}
      <div className="h-50 pt-3 text-sm text-gray-700 overflow-auto no-scrollbar">
        Description Lorem ipsum dolor sit amet, consectetur 
      </div>

      {/* Buttons always at bottom */}
      <div className="flex justify-around gap-2 mt-auto pb-3">
        <Button className="w-1/2 bg-teal-400 whitespace-normal font-bold hover:bg-teal-500">
          Mark as Completed
        </Button>
        <Button className="w-1/2 bg-rose-400 whitespace-normal font-bold hover:bg-rose-500">
          Mark as Failed
        </Button>
      </div>
    </div>
  </div>
</div>


  )
}

export default TaskCards
