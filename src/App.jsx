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
import PublicRoute from "./components/PublicRoute/PublicRoute";

const Home = lazy(() => import("pages/Home/Home"));
const Login = lazy(() => import("pages/Auth/Login"));
const SignUp = lazy(() => import("pages/Auth/SignUp"));

export default function App() {
  const dispatch = useDispatch();

  const isAccessToken = useSelector(selectAccessToken);
  useEffect(() => {
    if (isAccessToken) {
      dispatch(currentUserThunk())
        .unwrap()
        .then()
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
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path="/signup"
                element={
                  <PublicRoute>
                    <SignUp />
                  </PublicRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}
