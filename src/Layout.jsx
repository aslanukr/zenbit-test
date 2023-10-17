import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import "./index.css";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
