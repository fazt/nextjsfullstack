'use client'
import { signOut } from "next-auth/react";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-1/5 mt-2">
      <div className="bg-slate-300 h-full">
        <h1>Sidebar</h1>

        <ul>
          <li>
            <button
              className="bg-red-600 hover:bg-red-800 py-2 px-4 text-white font-bold rounded-md"
              onClick={() => {
                signOut();
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
