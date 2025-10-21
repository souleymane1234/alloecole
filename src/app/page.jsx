import Animation from "@/helper/Animation";

// Composants AlloEcole
import AlloEcoleHeader from "@/components/AlloEcoleHeader";
import AlloEcoleFooter from "@/components/AlloEcoleFooter";
import AlloEcoleHero from "@/components/AlloEcoleHero";
import AlloEcoleServices from "@/components/AlloEcoleServices";
import AlloEcoleBourses from "@/components/AlloEcoleBourses";
import AlloEcoleEcoles from "@/components/AlloEcoleEcoles";
import AlloEcolePermutations from "@/components/AlloEcolePermutations";
import AlloEcoleNewsletter from "@/components/AlloEcoleNewsletter";
import AlloEcoleNewsFeed from "@/components/AlloEcoleNewsFeed";
import HeaderOne from "@/components/HeaderOne";

export const metadata = {
  title: "AlloEcole - Portail de référence des établissements scolaires et universitaires de Côte d'Ivoire",
  description: "AlloEcole, votre portail de référence pour les bourses d'études, les écoles, les permutations et l'orientation en Côte d'Ivoire. Centralisez vos démarches éducatives en un seul endroit.",
};

const page = () => {
  return (
    <>
      {/* AlloEcole Header */}
      <HeaderOne />
      {/* <AlloEcoleHeader /> */}

      {/* Animation */}
      <Animation />

      {/* AlloEcole Hero */}
      <AlloEcoleHero />

      {/* AlloEcole Services */}
      <AlloEcoleServices />

      {/* AlloEcole News Feed */}
      <AlloEcoleNewsFeed />

      {/* AlloEcole Bourses */}
      {/* <AlloEcoleBourses /> */}

      {/* AlloEcole Ecoles */}
      {/* <AlloEcoleEcoles /> */}

      {/* AlloEcole Permutations */}
      {/* <AlloEcolePermutations /> */}

      {/* AlloEcole Newsletter */}
      {/* <AlloEcoleNewsletter /> */}

      {/* AlloEcole Footer */}
      {/* <AlloEcoleFooter /> */}
    </>
  );
};

export default page;
