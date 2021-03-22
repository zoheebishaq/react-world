import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Logo />
      <Countries />
      <h1>SAlut</h1>
    </div>
  );
};

export default Home;
