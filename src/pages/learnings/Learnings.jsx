import React from "react";
import { Link } from "react-router-dom";

const Learnings = () => {
  return (
    <div className="container mx-auto p-6 min-h-[100vh] text-center">
      <h1 className="text-4xl font-bold mb-8 text-stone-700">Learnings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 relative top-[200px]">
        <Link
          to="/notes"
          className="bg-stone-600 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-stone-700 transition duration-300"
        >
          Notes
        </Link>
        <Link
          to="/youtube"
          className="bg-stone-600 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-stone-700 transition duration-300"
        >
          YouTube Playlists
        </Link>
        <Link
          to="/codefile"
          className="bg-neutral-600 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-stone-700 transition duration-300"
        >
          Code Files
        </Link>
        <Link
          to="/projects"
          className="bg-stone-600 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-stone-700 transition duration-300"
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Learnings;
