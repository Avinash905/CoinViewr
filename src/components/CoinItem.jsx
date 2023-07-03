import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";

const CoinItem = ({ coin }) => {
  const [savedCoin, setSavedCoin] = useState(false);
  const { user } = UserAuth();

  // get doc related to only your email
  const coinPath = doc(db, "users", `${user?.email}`);

  const saveCoin = async () => {
    if (user?.email) {
      setSavedCoin(true);
      // add a new array in the firestore
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank: coin.market_cap_rank,
          symbol: coin.symbol,
        }),
      });
    } else {
      alert("Please sign in to add coins to your watchlist");
    }
  };

  return (
    <tr className="h-[80px] border-b overflow-hidden">
      <td
        onClick={saveCoin}
        className="cursor-pointer"
      >
        {savedCoin ? <AiFillStar color="gold" /> : <AiOutlineStar />}
      </td>
      <td>{coin?.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`}>
          <div className="flex items-center">
            <img
              src={coin?.image}
              alt={coin?.name}
              className="w-6 mr-2 rounded-full"
            />
            <p className="hidden sm:table-cell">{coin?.name}</p>
          </div>
        </Link>
      </td>
      <td>{coin?.symbol.toUpperCase()}</td>
      <td>₹{coin?.current_price.toLocaleString("en-IN")}</td>
      <td>
        {coin?.price_change_percentage_24h > 0 ? (
          <span className="text-green-600">
            {coin?.price_change_percentage_24h.toFixed(2)}
          </span>
        ) : (
          <span className="text-red-600">
            {coin?.price_change_percentage_24h.toFixed(2)}
          </span>
        )}
      </td>
      <td className="w-[180px] hidden md:table-cell">{coin?.total_volume}</td>
      <td className="w-[180px] hidden sm:table-cell">{coin?.market_cap}</td>
      <td>
        <Sparklines data={coin?.sparkline_in_7d.price}>
          <SparklinesLine color="teal" />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
