import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="w-full z-10 max-w-[1380px] h-24 flex justify-between items-center fixed top-0 px-6 backdrop-blur-lg">
      <div>
        <Link to={"/"}>
          <span className="text-white text-xl  tablet:text-2xl laptop:text-3xl desktop:text-3xl">
            MockupGenerator
          </span>
        </Link>
      </div>
      <div className="hidden laptop:flex">
        <ul className="flex justify-center items-center gap-5">
          <li>
            <Link to={"/generate"}>
              <a className="text-black text-lg py-1 px-5 cursor-pointer rounded-lg bg-white">
                Probar
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="laptop:hidden">
        {/* Mostrar el botón del menú en dispositivos móviles */}
        <button
          className="text-white text-lg p-2 rounded-lg bg-transparent outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
      {showMenu && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="laptop:hidden absolute top-24 left-0 w-[100%] h-[100vh] bg-white flex items-center justify-center"
        >
          {/* Mostrar el menú desplegable en dispositivos móviles */}
          <ul className="flex flex-col justify-center items-center gap-5">
            <li className="text-black text-lg">¿Como funciona?</li>
            <li className="text-black text-lg">Mockups</li>
            <li>
              <Link to={"/generate"}>
                <a className="text-white text-lg py-1 px-5 cursor-pointer rounded-lg bg-black">
                  Probar
                </a>
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
