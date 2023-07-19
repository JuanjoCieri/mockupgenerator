import "./App.css";
import Generate from "./pages/generate/Generate";
import Home from "./pages/home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import NotFound from "./pages/notfound/NotFound";
import { AnimatePresence } from "framer-motion";
import Success from "./pages/success/Success";
import { AppProvider } from "./utils/AppContext";

function App() {
  const location = useLocation();
  return (
    <>
      <AppProvider>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path={"/generate"} element={<Generate />} />
            <Route path={"/success"} element={<Success />} />
            <Route path={"/*"} element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </AppProvider>
    </>
  );
}

export default App;
