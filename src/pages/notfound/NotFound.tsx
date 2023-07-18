import { Link } from "react-router-dom";
import Header from "../../components/Header";

export default function NotFound () {
    return (
        <>
        <Header />
        <main className="w-full py-32 mt-24 flex justify-center items-center">
            <Link to={"/"} className="text-6xl">Aquí no hay nada...</Link>
        </main>
        </>
    )
}