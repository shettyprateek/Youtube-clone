import React, { useRef, useState } from "react";

const DemoUseRef = () => {
  let a = 0;
  const [b, setB] = useState(0);
  const c = useRef(0);
  console.log("Re Rendering");
  return (
    <div className="w-96 h-96 m-2 border border-black">
      <div className="flex flex-col items-start m-2">
        <div className="flex items-center">
          <button
            className="px-4 mr-8 w-40 py-2 bg-green-400 rounded-sm"
            onClick={() => {
              a++;
              console.log("a = ", a);
            }}
          >
            Increase Let
          </button>
          {a}
        </div>
        <div className="flex items-center">
          <button
            className="my-2 mr-8 w-40 px-4 py-2 bg-green-400 rounded-sm"
            onClick={() => {
              setB(b + 1);
            }}
          >
            Increase State
          </button>
          {b}
        </div>
        <div className="flex items-center">
          <button
            className="px-4 mr-8 py-2 w-40 bg-green-400 rounded-sm"
            onClick={() => {
              c.current = c.current + 1;
              console.log("c = ", c.current);
            }}
          >
            Increase Ref
          </button>
          {c.current}
        </div>
      </div>
    </div>
  );
};

export default DemoUseRef;
