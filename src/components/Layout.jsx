import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-[100vh] overflow-clip ">
      <header className="flex justify-center gap-16 py-6 bg-sky-700 box-border max-w-6xl mx-auto w-full">
        <Link
          to="/"
          className="text-sky-50 text-2xl border border-sky-700 hover:border-sky-100 px-12 py-4 rounded box-border"
        >
          Home
        </Link>
        <Link
          to="/movies"
          className="text-sky-50 text-2xl border border-sky-700 hover:border-sky-100 px-12 py-4 rounded box-border"
        >
          Movies
        </Link>
      </header>

      <main className="flex-auto max-w-6xl w-full mx-auto bg-sky-50">
        <Outlet />
      </main>

      <footer className="py-6 bg-sky-200 text-sky-700 text-center font-bold max-w-6xl mx-auto w-full">
        SY - Movies - 2023
      </footer>
    </div>
  );
};

export default Layout;
