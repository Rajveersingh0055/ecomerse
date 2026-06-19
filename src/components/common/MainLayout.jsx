import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout() {
  return (
    <div>
      <Footer />
      <Outlet />
      <Header />
    </div>
  );
}

export default MainLayout;
