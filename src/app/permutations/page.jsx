import Breadcrumb from "@/components/Breadcrumb";
import PermutationRequestForm from "@/components/PermutationRequestForm";
import PermutationList from "@/components/PermutationList";
import PermutationStats from "@/components/PermutationStats";
import AlloEcoleHeader from "@/components/AlloEcoleHeader";
import AlloEcoleFooter from "@/components/AlloEcoleFooter";
import Animation from "@/helper/Animation";
import HeaderOne from "@/components/HeaderOne";

export const metadata = {
  title: "AlloEcole - Demandes de Permutation",
  description:
    "Faites une demande de permutation pour changer d'établissement. Consultez les demandes existantes et trouvez des correspondances pour faciliter votre changement d'école.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* Header */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Demandes de Permutation"} />

      {/* Permutation Stats */}
      {/* <PermutationStats />  */}

      {/* Permutation Request Form */}
      <PermutationRequestForm />

      {/* Permutation List */}
      <PermutationList />

      {/* Footer */}
      <AlloEcoleFooter />
    </>
  );
};

export default page;
