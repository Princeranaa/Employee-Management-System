import React from 'react';
import Header from '../other/Header';
import CreateTaskForm from '../other/CreateTaskForm';
import AllTask from '../other/AllTask';

function AdminDashbord(props) {
  return (
    <div className="h-screen bg-[#1c1c1c] w-full overflow-auto">
      <Header changeUser={props.changeUser} />
      <CreateTaskForm />
      <AllTask />
    </div>
  );
}

export default AdminDashbord;
