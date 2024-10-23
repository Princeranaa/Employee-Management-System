import React from 'react'

function NewTask({data}) {
  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5 bg-purple-500 rounded-xl min-w-[90%] md:min-w-[300px]">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-4 py-1 text-sm rounded">{data.category}</h3>
          <h4 className="text-xl font-semibold">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
        <p className="text-xl font-semibold mt-2">
          {data.description}
        </p>
        <div className='mt-6 flex items-center '>
           <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md'>
             Accept Task
           </button>
          </div>
      </div>
  )
}

export default NewTask