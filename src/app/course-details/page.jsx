import Breadcrumb from "@/components/Breadcrumb";
import BourseDetails from "@/components/BourseDetails";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "AlloEcole - Détails de la bourse d'études",
  description:
    "Découvrez tous les détails de cette bourse d'études : exigences, avantages, processus de candidature et informations de contact. Trouvez toutes les informations nécessaires pour postuler.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderOne */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Détails de la bourse"} />

      {/* BourseDetails */}
      <BourseDetails />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
