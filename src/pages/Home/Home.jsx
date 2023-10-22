import { useSelector } from "react-redux";
import Deals from "src/components/Deals/Deals";
import Hero from "src/components/Hero/Hero";
import { selectIsAuth } from "src/redux/selectors";

const Home = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <>
      <Hero />
      {isAuth && <Deals />}
    </>
  );
};

export default Home;
