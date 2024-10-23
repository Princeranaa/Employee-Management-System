import React, { useContext } from 'react';
import { AuthContex } from '../../Context/AuthProvider';

function AllTask() {
  const [useData,setuseData] = useContext(AuthContex);
  // console.log(authData.employees);

  return (
      <div className='bg-[#1c1c1c] text-zinc-950 font-semibold p-2 sm:p-3 md:p-4 lg:p-5 mt-2 sm:mt-3 md:mt-4 lg:mt-5'>
      <div className="grid grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-7 w-full mb-2 px-2 sm:px-3 md:px-4 py-2 sm:py-3 bg-zinc-700 rounded-md text-xs sm:text-sm md:text-base lg:text-lg">
             <h2 className="font-medium text-zinc-200 text-center">Employee</h2>
             <h2 className="font-medium text-zinc-200 text-center">New</h2>
             <h2 className="font-medium text-zinc-200 text-center">Active</h2>
             <h2 className="font-medium text-zinc-200 text-center">Complete</h2>
             <h2 className="font-medium text-zinc-200 text-center">Failed</h2>
      </div>

      <div id='tasklist' className='overflow-auto max-h-[calc(100vh-200px)]'>
    {useData.map((elem, idx) => {
      // Count active tasks
      const activeCount = elem.tasks.filter(task => task.active).length;
      const newCount = elem.tasks.filter(task => task.newTask).length;
      const completedCount = elem.tasks.filter(task => task.completed).length;
      const failedCount = elem.tasks.filter(task => task.failed).length;

      return (
        <div className='grid grid-cols-5 gap-2 sm:gap-3 md:gap-4 mb-2 px-2 sm:px-3 md:px-4 py-2 sm:py-3 bg-zinc-700 rounded-md text-xs sm:text-sm md:text-base lg:text-lg' key={idx}>
          <h2 className='font-medium text-zinc-300 truncate'>{elem.firstName}</h2>
          <h3 className='font-medium text-blue-500 text-center'>{newCount}</h3>
          <h5 className='font-medium text-yellow-400 text-center'>{activeCount}</h5>
          <h5 className='font-medium text-teal-400 text-center'>{completedCount}</h5>
          <h5 className='font-medium text-red-500 text-center'>{failedCount}</h5>
        </div>
      );
    })}
  </div>
</div>
  );
}

export default AllTask;