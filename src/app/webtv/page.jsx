import Breadcrumb from "@/components/Breadcrumb";
import WebTVHero from "@/components/WebTVHero";
import VideoLibrary from "@/components/VideoLibrary";
import VideoCategories from "@/components/VideoCategories";
import FeaturedVideos from "@/components/FeaturedVideos";
import HeaderOne from "@/components/HeaderOne";
import FooterOne from "@/components/FooterOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "AlloEcole - Web TV",
  description:
    "Découvrez notre Web TV éducative avec des vidéos catégorisées sur l'orientation, les études, les bourses, les conseils et bien plus encore.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* Header */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Web TV"} />

      {/* Web TV Hero */}
      <WebTVHero />

      {/* Featured Videos */}
      <FeaturedVideos />

      {/* Video Categories */}
      <VideoCategories />

      {/* Video Library */}
      <VideoLibrary />

      {/* Footer */}
      <FooterOne />
    </>
  );
};

export default page;
