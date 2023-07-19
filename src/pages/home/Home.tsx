import Header from "../../components/Header";
import HowWorkSection from "./components/HowWorkSection";
import Main from "./components/Main";
import transition from "../../transition"
import Divisor from "./components/Divisor";

const Home =() => {
  return (
    <>
      <Header />
      <Main />
      <Divisor />
      <HowWorkSection />
      <Divisor />
    </>
  );
}

export default transition(Home)
