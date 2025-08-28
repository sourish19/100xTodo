import React from 'react'

function TaskStats({ fieldNumber }) {
  return (
    <div className="h-125 p-1 sm:fixed sm:right-10 sm:h-screen">
      <div className="flex flex-1 flex-col flex-wrap items-center justify-center gap-8 text-white">
        {fieldNumber.map((val, index) => {
          return (
            <div
              key={index}
              className={`flex h-25 w-45 flex-col rounded-2xl ${val.color} shadow-input font-montserrat items-center justify-center lg:w-50`}
            >
              <div className="pt-2 text-2xl font-semibold">0</div>
              <div className="px-1 pt-2 text-xl font-semibold">{val.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TaskStats

{
  /* <div className="flex gap-8 justify-center items-center text-white flex-wrap ">
  <div className="flex flex-col w-70 h-30 rounded-2xl bg-emerald-400 px-5 pt-4 justify-center items-center">
    <div className="text-4xl font-semibold">2</div>
    <div className="py-5 text-3xl font-semibold">Complete Tasks</div>
  </div>
  <div className="flex flex-col w-70 h-30 rounded-2xl bg-blue-400 px-5 pt-4 justify-center items-center">
    <div className="text-4xl font-semibold">2</div>
    <div className="py-5 text-3xl font-semibold">Delete Tasks</div>
  </div>
</div>; */
}
