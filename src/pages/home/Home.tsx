import Header from "../../components/Header";
import HowWorkSection from "./components/About";
import Main from "./components/Main";
import transition from "../../transition";
import Divisor from "./components/Divisor";
import HowWork from "./components/HowWork";
import Features from "./components/Features";
import Marqueee from "./components/Marqueee";

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Divisor />
      <HowWorkSection />
      <Divisor />
      <HowWork />
      <Divisor />
      <Marqueee />
      <Divisor />
      <Features />
      <Divisor />

    </>
  );
};

export default transition(Home);
