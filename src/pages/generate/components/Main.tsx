import { useState } from "react";
import Input from "./Input";

export default function Main() {
  const [loading, setLoading] = useState(false);
  console.log(loading)

  return (
    <main className="w-full mt-24 py-24 flex flex-col justify-center items-center gap-10">
      <h4 className="text-6xl text-white">Ingresá la URL de tu página web</h4>
      <Input setLoading={setLoading} />
      {loading && <p className="text-white">Loading...</p>} {/* Render something when loading is true */}
    </main>
  );
}
