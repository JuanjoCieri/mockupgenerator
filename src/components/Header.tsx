// import phoneMockup from "../../../assets/Home/PhoneMockupCropped.png"

export default function Header() {
  return (
    <header className="w-full max-w-[1380px] h-24 flex justify-between items-center fixed top-0 px-6 backdrop-blur-lg">
      <div>
        <span className="text-white text-3xl">MockupGenerator</span>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-5">
          <li className="text-white text-lg">¿Como funciona?</li>
          <li className="text-white text-lg">Mockups</li>
          <li>
            <a className="text-black text-lg py-1 px-3 rounded-lg bg-white">
              Probar
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
