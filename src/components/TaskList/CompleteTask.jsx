import React from 'react'

function CompleteTask({data}) {
  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5 bg-cyan-600 rounded-xl min-w-[90%] md:min-w-[300px]">
        <div className="flex justify-between items-center">
    <h3 className="bg-red-600 px-4 py-1 text-white font-semibold text-sm rounded">{data.category}</h3>
    <h4 className="text-xl  font-semibold">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
        <p className="text-sm  mt-2">
          {data.description}
        </p>
        <div className='mt-2'>
          <button className='w-full rounded-md py-1 font-semibold  bg-green-400'>Completed</button>
        </div>
      </div>
  )
}

export default CompleteTask