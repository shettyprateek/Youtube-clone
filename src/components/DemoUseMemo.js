import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const DemoUseMemo = () => {
  const [number, setNumber] = useState(1);

  const [isDark, setIsDark] = useState(false);

  // useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
  const prime = useMemo(() => findNthPrime(number), [number]);

  return (
    <div
      className={
        "w-96 h-96 m-2 border border-black " +
        (isDark && "bg-gray-700 text-white")
      }
    >
      <div className="m-2">
        <input
          className={
            "border border-gray-400 px-2 rounded-lg focus:outline-none " +
            (isDark && "bg-gray-700 text-white")
          }
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <div className="m-2">{prime}</div>
      </div>
      <button
        className="m-2 p-2 bg-green-300 rounded-sm"
        onClick={() => setIsDark(!isDark)}
      >
        Toggle
      </button>
    </div>
  );
};

export default DemoUseMemo;
