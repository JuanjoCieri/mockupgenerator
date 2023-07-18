import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Input({ setLoading }) {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  function handleClick() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/success")
    }, 5000);
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
