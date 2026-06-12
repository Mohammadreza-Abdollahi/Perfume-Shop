import Welcome from "@/components/landing/Welcome";
import TopBanner from "../../components/landing/TopBanner";
import TopProducts from "@/components/landing/TopProducts";

const LandingPage = () => {
  return (
    <>
      <TopBanner />
      <Welcome/>
      <TopProducts/>
    </>
  );
};

export default LandingPage;
