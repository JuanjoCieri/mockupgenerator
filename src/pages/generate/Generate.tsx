import Header from "../../components/Header";
import Main from "./components/Main";
import transition from "../../transition"

const Generate = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default transition(Generate)
