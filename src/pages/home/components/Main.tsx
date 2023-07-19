import { Link } from "react-router-dom";
import phone from "../../../assets/3dIcons/phone3d.png";

export default function Main() {
  return (
    <main className="w-full mt-24 tablet:mt-32 laptop:mt-32 desktop:mt-32 py-16 flex flex-col tablet:flex-row laptop:flex-row desktop:flex-row px-3 tablet:px-6 laptop:px-6 desktop:px-6 ">
      <div className="w-full tablet:w-2/3 laptop:w-2/3 desktop:w-2/3 flex flex-col justify-start items-start gap-8">
        <h1 className="text-white text-6xl tablet:text-7xl laptop:text-8xl desktop:text-8xl">
          Generá <span className="text-[#EF90F8]">mockups</span> profesionales
          en segundos
        </h1>
        <h3 className="text-white text-xl">
          La manera más <span className="text-[#EF90F8]">fácil</span> para{" "}
          <span className="text-[#EF90F8]">presentar</span> tus{" "}
          <span className="text-[#EF90F8]">proyectos</span> de forma <br />{" "}
          <span className="text-[#EF90F8]">profesional</span>
        </h3>
        <Link to={"/generate"}>
          <a className="text-xl cursor-pointer bg-white text-black py-2 px-6 rounded-lg">
            Probar
          </a>
        </Link>
      </div>
      <div className="w-full tablet:w-1/3 laptop:w-1/3 desktop:w-1/3 flex justify-center items-center">
        <img src={phone} className="w-[100%]" />
      </div>
    </main>
  );
}
