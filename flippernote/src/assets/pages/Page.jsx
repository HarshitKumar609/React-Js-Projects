import React from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

const Page = () => {
  return (
    <>
      <div className=" container relative bg-blue-700 flex justify-center items-center flex-wrap flex-col h-96 w-lvh ">
        <Page1 />
        <Page2 />
        <Page3 />
        <div className="w-15 bg-blue-600 border-2 flex justify-center items-center mt-30 absolute bottom-2 right-2 text-white">
          Next --
        </div>
      </div>
    </>
  );
};

export default Page;
