import desktop3d from "../../../assets/3dIcons/desktop3d.png";
import fast3d from "../../../assets/3dIcons/fast3d.png";
import phone3d from "../../../assets/3dIcons/phone3d.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center">
      <div>
        <h1 className="font-extrabold relative max-[700px]:text-7xl inline-block tracking-tighter text-transparent text-8xl bg-clip-text bg-gradient-to-b dark:from-[#585858] dark:to-[#2e2e2e] from-[#313131] to-[#000000]">
          Generador de Mockups
        </h1>
        <h3 className="font-semibold max-[700px]:text-4xl inline-block tracking-tighter text-3xl text-gray-700">Potenciá tus proyectos con presentaciones impresionantes.</h3>
      </div>
      <div className="flex">
        <img src={desktop3d} alt="" className="w-52" />
        <img src={fast3d} alt="" className="w-52" />
        <img src={phone3d} alt="" className="w-52" />
      </div>
    </header>
  );
}
