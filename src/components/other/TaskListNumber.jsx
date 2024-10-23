import React from 'react';

function TaskListNumber({data}) {

  return (
    <div className="flex flex-wrap w-full mt-10 justify-between md:justify-between  gap-5">
      <div className="w-full md:w-[20%] bg-purple-400 rounded-xl py-6 px-9 ">
        <h2 className="text-3xl font-semibold">{data.taskCounts.new}</h2>
        <h3 className="text-xl font-medium  text-center">New Task</h3>
      </div>

      <div className="w-full md:w-[20%] bg-blue-300 rounded-xl py-6 px-9">
        <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium mt-2 text-center">Completed Task</h3>
      </div>

      <div className="w-full md:w-[20%] bg-cyan-500 rounded-xl py-6 px-9">
        <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-medium text-center">Accepted Task</h3>
      </div>

      <div className="w-full md:w-[20%] bg-gray-400 rounded-xl py-6 px-9">
        <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium text-center">Failed Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumber;
