import React, { useState } from "react";

export default function Input({ setLoading }) {
  const [inputValue, setInputValue] = useState("");

  function handleClick() {
    setLoading(true);
    // Perform any other actions with inputValue, if needed
  }

  return (
    <>
      <input
        placeholder="https://www.google.com"
        className="w-[80%] text-white border border-gray-400 rounded-xl py-4 px-4 bg-transparent"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button
        onClick={handleClick}
        className="text-black bg-white rounded-lg text-lg py-2 px-6"
      >
        Generar
      </button>
    </>
  );
}
