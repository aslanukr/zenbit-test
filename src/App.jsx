import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Layout from "./Layout";
import { Loader } from "./components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { selectAccessToken } from "./redux/selectors";
import { currentUserThunk, logOutThunk } from "./redux/auth/authThunk";

const Home = lazy(() => import("pages/Home/Home"));
const Login = lazy(() => import("pages/Auth/Login"));
const SignUp = lazy(() => import("pages/Auth/Signup"));

export default function App() {
  const dispatch = useDispatch();

  const isAccessToken = useSelector(selectAccessToken);
  useEffect(() => {
    if (isAccessToken) {
      dispatch(currentUserThunk())
        .unwrap()
        .then((response) => {
          console.log("currentUserThunk response:", response);
        })
        .catch(() => dispatch(logOutThunk()));
    }
  }, [dispatch, isAccessToken]);
  return (
    <>
      <Router basename="/zenbit-test">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}
