  import React from "react";

  function AcceptTask({data}) {
    return (
      <div className="h-full flex-shrink-0 w-[300px] p-5 bg-zinc-500 rounded-xl min-w-[90%] md:min-w-[300px]">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 font-semibold text-white  px-4 py-1 text-sm rounded">{data.category}</h3>
          <h4 className="text-xl">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
        <p className="text-sm font-semibold mt-2">
        {data.description}
        </p>
        <div className="flex justify-between mt-4">
          <button className="bg-green-500 py-2 px-2 rounded-md font-semibold  text-sm">Mark as Completed</button>
          <button className="bg-red-500 py-2 px-2 rounded-md font-semibold  text-sm">Mark as failed</button>
        </div>
      </div>
    );
  }

  export default AcceptTask;
