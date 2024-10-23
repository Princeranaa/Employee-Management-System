import React from "react";

function Header({ changeUser, data }) {
  return (
    <div className="flex justify-between font-bold items-center p-4 bg-[#1c1c1c] text-white">
      <h1 className="text-2xl">
        {data ? (
          <>
            <span className="bg-gradient-to-r from-purple-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Welcome, {data.firstName}
            </span>
            <span > 👋🏻</span> 
          </>
        ) : (
          <>
         <span className="bg-gradient-to-r from-purple-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent"> Hello Admin </span>
         <span> 👋🏻</span>
          </>
        )}
      </h1>
      <button
        onClick={() => changeUser(null)}
        className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Header;
