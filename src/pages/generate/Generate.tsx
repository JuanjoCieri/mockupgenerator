import Header from "../../components/Header";
import Main from "./components/Main";
import transition from "../../transition"
import Footer from "../../components/Footer";

const Generate = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default transition(Generate)
