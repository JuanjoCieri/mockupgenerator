import prueba from "../../../assets/prueba2.png";

export default function HowWorkSection() {
  return (
    <section className="w-full flex py-16 items-center justify-center bg-black rounded-xl">
      <div className="w-1/2 flex justify-center items-center">
        {/* <div className="w-96 h-96 bg-[#BCBEF2] rounded-xl"></div> */}
        <img src={prueba} className="w-[80%]" />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="flex flex-col gap-4 justify-start items-start">
          <span className="text-gray-400 tracking-tighter">Sobre la app</span>
          <h4 className="font-bold text-4xl text-white">
            ¿Como funciona?
          </h4>
          <p className="text-gray-400">
            Eleva tus proyectos web con nosotros: la herramienta perfecta para
            crear mockups profesionales en segundos. <br />
            Ofrecemos la forma más sencilla de transformar tus diseños web en
            mockups impactantes. Simplemente ingresa el enlace de tu página o
            aplicación web, y nuestra plataforma se encargará de generar mockups
            realistas para dispositivos como desktops, tablets y celulares. <br/>

          </p>
          <a className="py-4 px-12 bg-white text-black font-semibold rounded-3xl">
            Probar
          </a>
        </div>
      </div>
    </section>
  );
}
