import phoneMockup from "../../../assets/Home/PhoneMockupCropped.png"

export default function Header() {
  return (
    <header className="w-full flex items-center justify-center">
      <div className="w-1/2 h-screen flex flex-col items-start justify-center gap-7">
        <h1 className="font-semibold relative inline-block tracking-tighter text-transparent text-7xl bg-clip-text bg-gradient-to-b dark:from-[#585858] dark:to-[#2e2e2e] from-[#313131] to-[#000000]">
          La manera más fácil para generar mockups de tus proyectos.
        </h1>
        <a className="bg-[#f2f0bc] py-4 px-16 border border-black rounded-full text-black text-lg font-semibold">Probar</a>
      </div>
      <div className="w-1/2 flex justify-end ">
        <img src={phoneMockup} className="w-96"/>
      </div>
    </header>   
  );
}
