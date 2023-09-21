import {
  Explore,
  Header,
  Intro,
  Newpicks,
  Newarrivals,
  DiscoverMore,
  Stockholm,
  Footer,
} from "../../components";

const Home = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Newpicks />
      <Explore />
      <Newarrivals />
      <DiscoverMore />
      <Stockholm />
      <Footer />
    </div>
  );
};

export default Home;
