import React from "react";

function TaskStats({ fieldNumber }) {
  return (
    <div className="flex gap-8 justify-center items-center text-white flex-wrap ">
      {fieldNumber.map((val, index) => {
        return (
          <div
            key={index}
            className={`flex flex-col w-70 h-30 rounded-2xl ${val.color} jusify-center items-center`}
          >
            <div className="text-4xl font-semibold">2</div>
            <div className="py-5 text-3xl font-semibold">{val.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default TaskStats;

{/* <div className="flex gap-8 justify-center items-center text-white flex-wrap ">
  <div className="flex flex-col w-70 h-30 rounded-2xl bg-emerald-400 px-5 pt-4 justify-center items-center">
    <div className="text-4xl font-semibold">2</div>
    <div className="py-5 text-3xl font-semibold">Complete Tasks</div>
  </div>
  <div className="flex flex-col w-70 h-30 rounded-2xl bg-blue-400 px-5 pt-4 justify-center items-center">
    <div className="text-4xl font-semibold">2</div>
    <div className="py-5 text-3xl font-semibold">Delete Tasks</div>
  </div>
</div>; */}
