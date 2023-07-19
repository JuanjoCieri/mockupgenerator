import prueba from "../../../assets/prueba2.png";
import pru from "../../../assets/Group2.png";
import { Link } from "react-router-dom";

export default function HowWorkSection() {
  return (
    <section className="w-full flex items-center justify-center  rounded-xl">
      <div className="w-1/2 flex justify-start items-end rounded-br-xl bg-gradient-to-b from-black to-gray-400">
        {/* <div className="w-96 h-96 bg-[#BCBEF2] rounded-xl"></div> */}
        <img src={pru} className="w-[70%]" />
      </div>
      <div className="w-1/2 flex justify-center items-center px-6">
        <div className="flex flex-col gap-10 justify-start items-start">
          <span className="text-gray-300">Sobre la app</span>
          <h4 className="text-5xl text-white">¿Como funciona?</h4>
          <p className="text-gray-300">
            Elevá tus proyectos web con nosotros: la herramienta perfecta para
            crear mockups profesionales en segundos. <br />
            Ofrecemos la forma más sencilla de transformar tus diseños web en
            mockups impactantes. Simplemente ingresá el enlace de tu página o
            aplicación web, y nuestra plataforma se encargará de generar mockups
            realistas para dispositivos como desktops, tablets y celulares.{" "}
            <br />
          </p>
          <Link to={"/generate"}>
            <a className="py-4 px-12 cursor-pointer bg-white text-black font-semibold rounded-3xl">
              Probar
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
