import { MobileAsideProvider } from "@/context/mobileUserAsideContext";
import AdminPanelAside from "@/components/admin-panel-layout/Aside";
import AdminPanelHeader from "@/components/admin-panel-layout/Header";
import AdminPanelFooter from "@/components/admin-panel-layout/Footer";

const UserLayout = ({ children }) => {
  return (
    <>
      <MobileAsideProvider>
            <section className="h-screen">
              <AdminPanelAside />
              <AdminPanelHeader />
              <div className="w-full md:w-11/12 mr-auto pt-20 md:pt-22 px-3 pb-20">
                {children}
              </div>
              <AdminPanelFooter/>
            </section>
      </MobileAsideProvider>
    </>
  );
};

export default UserLayout;
