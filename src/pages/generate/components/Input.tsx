import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../../utils/AppContext";

export default function Input({ setLoading }) {
  const { setSharedData } = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function isValidURL(url: string): boolean {
    const urlPattern =
      /^https?:\/\/(?:www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z0-9]+(?:\/[^\s]*)?$/;
    return urlPattern.test(url);
  }

  function handleClick() {
    setError("");
    setLoading(true);

    if (!isValidURL(inputValue)) {
      setError("Por favor, ingresá una URL válida.");
      setLoading(false);
      return;
    }

    axios
      .get(
        `http://localhost:3000/captures?url=${encodeURIComponent(inputValue)}`
      )
      .then((response) => {
        setSharedData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
        navigate("/success");
      });
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
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
}
