import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContex } from '../../Context/AuthProvider';

function CreateTaskForm() {
  const [taskTitle, setTaskTitle] = useState('');
  const [date, setDate] = useState('');
  const [assignee, setAssignee] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

    // useContex
  const [useData,setuseData] = useContext(AuthContex);


  const [newtask, setnewtask] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
  
    setnewtask({
      taskTitle,
      date,
      category,
      description,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });
  
    const data = useData // Ensure data is an array
    
   
     data.forEach((elem, index) => {
           if(assignee == elem.firstName){
            // console.log(elem.tasks)
            elem.tasks.push(newtask)
            elem.taskCounts.new = elem.taskCounts.new+1;
           }
    });
    setuseData(data);
    console.log(data) 

    // set data to the localStorage 
    // localStorage.setItem("employees", JSON.stringify(data))
  
    setTaskTitle("");
    setDate("");
    setAssignee("");
    setCategory("");
    setDescription("");
  };
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-zinc-400">Create Task</h1>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row bg-stone-800 text-zinc-300 p-8 gap-4">
        <div className="flex flex-col gap-4 w-full sm:w-1/2">
          <div className="flex flex-col">
            <label htmlFor="taskTitle" className="mb-2 font-medium">Task Title</label>
            <input
              type="text"
              id="taskTitle"
              className="border rounded-md bg-transparent px-4 py-2 w-full" 
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="date" className="mb-2 font-medium">Date</label>
            <input
              type="date"
              id="date"
              className="border rounded-md bg-transparent px-4 py-2 w-full" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="assignee" className="mb-2 font-medium">Assign to</label>
            <input
              type="text"
              id="assignee"
              className="border rounded-md bg-transparent px-4 py-2 w-full" 
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="category" className="mb-2 font-medium">Category</label>
            <input
              type="text"
              id="category"
              className="border rounded-md bg-transparent px-4 py-2 w-full" 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full sm:w-1/2">
          <div className="flex flex-col">
            <label htmlFor="description" className="mb-2 font-medium">Description</label>
            <textarea
              id="description"
              className="border rounded-md bg-transparent px-4 py-2 w-full h-32" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTaskForm;
