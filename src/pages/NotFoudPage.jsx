import React from "react";
import { Link } from "react-router-dom";

const NotFoudPage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <div className="text-center mb-20"> Page Not Foud</div>
      <Link to="/" className="border py-4 px-8 rounded hover:border-sky-600">Go Home</Link>
    </div>
  );
};

export default NotFoudPage;
