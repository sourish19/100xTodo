import { Trash,Pencil  } from 'lucide-react';
function TaskCards() {
  return (
    <div className="grid grid-cols-3 gap-x-5 gap-y-3  w-full h-screen my-8">
      <div className = "bg-gray-100 flex flex-col rounded-2xl max-h-100 w-80 shadow-gray-400 ">
        <div className="flex justify-between p-3 custom-dashed-circle">
          <div className="flex items-center justify-start gap-3">
            <div className="font-mono text-xl">Heading</div>
            <div className="font-mono text-lg">
              Tagline
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <Trash />
            <Pencil />
          </div>
        </div>
        <div className="w-100 pr-3 pb-3 pl-3 pt-5">
          Description
        </div>
      </div>


    </div>
  )
}

export default TaskCards
