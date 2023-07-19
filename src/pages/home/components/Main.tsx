import { Link } from "react-router-dom";
import phone from "../../../assets/3dIcons/phone3d.png"

export default function Main() {
  return (
    <main className="w-full mt-32 py-16 flex px-6">
      <div className="w-2/3 flex flex-col justify-start items-start gap-8">
        <h1 className="text-white text-8xl ">
          Generá <span className="text-[#EF90F8]">mockups</span> profesionales
          en segundos
        </h1>
        <h3 className="text-white text-2xl">La manera más <span className="text-[#EF90F8]">fácil</span> para <span className="text-[#EF90F8]">presentar</span> tus <span className="text-[#EF90F8]">proyectos</span> de forma <br/> <span className="text-[#EF90F8]">profesional</span></h3>
        <Link to={"/generate"}>
        <a className="text-xl cursor-pointer bg-white text-black py-2 px-6 rounded-lg">Probar</a>
        </Link>
      </div>
      <div className="w-1/3 flex justify-center items-center">
        <img src={phone} className="w-[100%] shadow-[0px_0px_46.349998474121094px_0px_#BF67D0,0px_0px_92.69999694824219px_0px_#BF67D0,0px_0px_324.45001220703125px_0px_#BF67D0,0px_0px_648.9000244140625px_0px_#BF67D0,0px_0px_1112.4000244140625px_0px_#BF67D0,0px_0px_1946.699951171875px_0px_#BF67D0]"/>
      </div>
    </main>
  );
}
