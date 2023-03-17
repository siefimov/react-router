import React from "react";

const Home = () => {
  return (
    <>
      <h1 className="text-3xl text-center pt-20">
        Welcome to the <span className="font-bold">Home Page</span> of the Movie Service
      </h1>
      <br />
      <div className="flex mt-10">
        <div className="w-[200px] h-[200px] bg-sky-200 mx-auto rotate-90 rounded-tl-full rounded-br-full "></div>
        <div className="w-[200px] h-[200px] bg-sky-400 mx-auto rotate-90 rounded-tl-full rounded-br-full "></div>
        <div className="w-[200px] h-[200px] bg-sky-600 mx-auto rotate-90 rounded-tl-full rounded-br-full "></div>
      </div>
    </>
  );
};

export default Home;
