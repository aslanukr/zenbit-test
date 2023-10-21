import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./Layout";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";

const Home = lazy(() => import("pages/Home/Home"));

export default function App() {
  return (
    <>
      <Router basename="/zenbit-test">
        <Suspense fallback={"Loading..."}>
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
