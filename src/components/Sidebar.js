import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.app.toggle);
  console.log("isMenuOpen ==>", isMenuOpen);
  return (
    <>
      {isMenuOpen && (
        <div className="w-1/5 m-2 text-center">
          <ul>
            <li className="hover:bg-gray-100 rounded-lg p-2">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-gray-100 rounded-lg p-2">Shorts</li>
            <li className="hover:bg-gray-100 rounded-lg p-2">Subscriptions</li>
          </ul>
          <h1 className="font-bold pt-5">Subscriptions</h1>
          <ul>
            <li className="hover:bg-gray-100 rounded-lg p-2">Music</li>
            <li className="hover:bg-gray-100 rounded-lg p-2">Sports</li>
            <li className="hover:bg-gray-100 rounded-lg p-2">Gaming</li>
            <li className="hover:bg-gray-100 rounded-lg p-2">Movies</li>
          </ul>
          <h1 className="font-bold pt-5">Watch Later</h1>
          <ul>
            <li className="hover:bg-gray-100 rounded-lg p-2">Music</li>
            <li className="hover:bg-gray-100 rounded-lg p-2">Sports</li>
            <li className="hover:bg-gray-100 rounded-lg p-2">Gaming</li>
            <li className="hover:bg-gray-100 rounded-lg p-2">Movies</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
