import CoinSearch from "../components/CoinSearch";
import Trending from "../components/Trending";

const Home = ({ coins }) => {
  return (
    <section>
      <CoinSearch coins={coins} />
      <Trending />
    </section>
  );
};

export default Home;
