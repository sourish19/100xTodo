import React from 'react'

function TaskStats({ fields, stats }) {
  return (
    <div className="h-125 p-1 sm:fixed sm:right-10 sm:h-screen">
      <div className="flex flex-1 flex-col flex-wrap items-center justify-center gap-8 text-white">
        {fields.map((field, index) => {
          return (
            <div
              key={index}
              className={`flex h-25 w-45 flex-col rounded-2xl bg-${field.color}-400 font-montserrat items-center justify-center border shadow-xl hover:scale-99 lg:w-50 transition-transform duration-200`}
            >
              <div className="pt-2 text-2xl font-semibold text-shadow-sm">
                0
              </div>
              <div className="px-1 pt-2 text-xl font-semibold text-shadow-sm">
                {field.name}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TaskStats
