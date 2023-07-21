import FeaturesCard from "./FeaturesCard";
import { ThunderIcon } from "../../../utils/Icons";
import { StarsIcon } from "../../../utils/Icons";
import { MoneyIcon } from "../../../utils/Icons";

export default function Features() {
  return (
    <section className="py-4 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-3 gap-10 px-4">
      <FeaturesCard
        featureIcon={<ThunderIcon />}
        featureTittle="Rápido"
        featureDesc="Nuestra calidad de codigo hace que seamos el generador de mockups más veloz de todos."
      />
      <FeaturesCard
        featureIcon={<StarsIcon />}
        featureTittle="Sencillo"
        featureDesc="Con solo ingresar la URL de la página web, vas a obtener varios modelos de mockup para elegir."
      />
      <FeaturesCard
        featureIcon={<MoneyIcon />}
        featureTittle="Gratis"
        featureDesc="Generá tantos mockups como quieras, nuestro generador es totalmente gratuito. "
      />
    </section>
  );
}
