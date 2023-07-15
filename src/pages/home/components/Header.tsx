import phoneMockup from "../../../assets/Home/PhoneMockupCropped.png"

export default function Header() {
  return (
    <header className="w-full flex items-center justify-center">
      <div className="w-1/2 flex flex-col items-start justify-center">
        <h1 className="font-extrabold relative inline-block tracking-tighter text-transparent text-7xl bg-clip-text bg-gradient-to-b dark:from-[#585858] dark:to-[#2e2e2e] from-[#313131] to-[#000000]">
          Generador de Mockups
        </h1>
        <h3 className="font-semibold inline-block tracking-tighter text-2xl text-gray-700">
          Potenciá tus proyectos con presentaciones impresionantes.
        </h3>
      </div>
      <div className="w-1/2 flex justify-end ">
        <img src={phoneMockup} className="w-96"/>
      </div>
    </header> 
  );
}
