import { useState } from "react";
import Input from "./Input";
import "./styles.css";
import { motion } from "framer-motion";

export default function Main() {
  const [loading, setLoading] = useState(false);

  return (
    <main className="w-full mt-24 py-24 flex flex-col justify-center items-center gap-10">
      <h4 className="text-6xl text-white text-center">Ingresá la URL de tu página web</h4>
      <Input setLoading={setLoading} />
      {loading && (
        <motion.div
          className="fixed top-0 left-0 w-[100%] h-[100vh] bg-black"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="h-full flex flex-col justify-center items-center">
            <div id="preloader">
              <div id="loader"></div>
            </div>
            <div className="mt-52">
              <p className="text-white">Estamos generando sus mockups...</p>
            </div>
          </div>
        </motion.div>
      )}
    </main>
  );
}
