import Breadcrumb from "@/components/Breadcrumb";
import MonProfil from "@/components/MonProfil";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "AlloEcole - Mon Profil",
  description:
    "Gérez votre profil utilisateur, consultez vos dossiers d'études, suivez vos demandes de bourses et organisez vos documents. Tout votre espace personnel en un seul endroit.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderOne */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Mon Profil"} />

      {/* MonProfil */}
      <MonProfil />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
