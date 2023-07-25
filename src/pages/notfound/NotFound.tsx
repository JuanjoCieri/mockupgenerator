import { Link } from "react-router-dom";
import Header from "../../components/Header";
import transition from "../../transition"


const NotFound = () => {
  return (
    <>
      <Header />
      <main className="w-full py-32 mt-32 flex flex-col justify-center items-center gap-10">
        <p className="text-6xl text-white">Aquí no hay nada...</p>
        <Link to={"/"} className="text-2xl text-black bg-white py-2 px-6 rounded-lg border border-gray-400">Volver</Link>
      </main>
    </>
  );
}

export default transition({ OgComponent: NotFound });
