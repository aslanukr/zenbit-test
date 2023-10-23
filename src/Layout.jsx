import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import { Loader } from "./components/Loader/Loader";
import { useSelector } from "react-redux";
import { selectIsAuthLoading, selectIsLoading } from "./redux/selectors";

const Layout = ({ children }) => {
  const isAuthLoading = useSelector(selectIsAuthLoading);
  const isLoading = useSelector(selectIsLoading);
  return (
    <div className="container">
      <Header />
      <main>
        {isAuthLoading || (isLoading && <Loader />)}
        <Outlet />
      </main>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Layout;
