import Header from "../../components/Header";
import Main from "./components/Main";
import transition from "../../transition"


const Success = () => {
    return (
        <>
        <Header />
        <Main />
        </>
    )
}

export default transition(Success)