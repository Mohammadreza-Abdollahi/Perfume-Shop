import Footer from "@/components/layout/Footer";
import Header from "../../components/layout/Header";

const LandingPageLayout = ({ children }) => {
  return (
    <>
      <section>
        <Header />
        <main>{children}</main>
        <Footer/>
      </section>
    </>
  );
};

export default LandingPageLayout;
