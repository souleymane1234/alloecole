import Breadcrumb from "@/components/Breadcrumb";
import AlloEcoleBourses from "@/components/AlloEcoleBourses";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "AlloEcole - Bourses d'études disponibles",
  description:
    "Découvrez toutes les bourses d'études disponibles, actuelles et passées. Trouvez les opportunités de financement pour vos études supérieures.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderOne */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Bourses d'études"} />

      {/* AlloEcoleBourses */}
      <AlloEcoleBourses />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
