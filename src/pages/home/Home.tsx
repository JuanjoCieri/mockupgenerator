import Header from "../../components/Header";
import HowWorkSection from "./components/HowWorkSection";
import Main from "./components/Main";
import transition from "../../transition"

const Home =() => {
  return (
    <>
      <Header />
      <Main />
      <HowWorkSection />
    </>
  );
}

export default transition(Home)
