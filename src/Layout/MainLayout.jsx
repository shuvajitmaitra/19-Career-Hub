import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto ">
        <Navbar></Navbar>

        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
