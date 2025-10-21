import Breadcrumb from "@/components/Breadcrumb";
import EtudesEtranger from "@/components/EtudesEtranger";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "AlloEcole - Études à l'étranger",
  description:
    "Créez votre dossier d'études à l'étranger et trouvez les meilleures opportunités d'études internationales. Formulaires complets pour postuler dans les universités du monde entier.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderOne */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Études à l'étranger"} />

      {/* EtudesEtranger */}
      <EtudesEtranger />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
