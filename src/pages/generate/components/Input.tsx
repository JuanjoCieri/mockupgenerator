import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../utils/AppContext";
interface InputProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const Input: React.FC<InputProps> = ({ setLoading }) => {
  const { setSharedData } = useAppContext();
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
        `https://mockupgenerator-back-production.up.railway.app/captures?url=${encodeURIComponent(inputValue)}`
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
        className="w-[80%] text-white border border-gray-400 rounded-xl py-4 px-4 bg-transparent shadow-[0px_0px_13.915200233459473px_0px_#974899,0px_0px_27.830400466918945px_0px_#974899,0px_0px_97.40640258789062px_0px_#974899,0px_0px_194.81280517578125px_0px_#974899,0px_0px_333.9648132324219px_0px_#974899,0px_0px_584.4384155273438px_0px_#974899]"
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
};
export default Input;
