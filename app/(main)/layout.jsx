import Header from "../../components/layout/Header";

const LandingPageLayout = ({ children }) => {
  return (
    <>
      <section>
        <Header />
        <main>{children}</main>
        <footer></footer>
      </section>
    </>
  );
};

export default LandingPageLayout;
