import Breadcrumb from "@/components/Breadcrumb";
import MesDossiers from "@/components/MesDossiers";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "AlloEcole - Mes Dossiers",
  description:
    "Consultez et suivez l'état de vos dossiers d'études à l'étranger et de bourses. Gérez vos candidatures et suivez leur progression en temps réel.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderOne */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Mes Dossiers"} />

      {/* MesDossiers */}
      <MesDossiers />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
