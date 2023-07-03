import SavedCoin from "../components/SavedCoin";
import { UserAuth } from "../context/AuthContext";
import { useNavigate, Navigate } from "react-router-dom";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) return <Navigate to="/signin" />;

  return (
    <section className="max-w-[1140px] mx-auto">
      <div className="flex justify-between items-center my-12 py-8 rounded-div">
        <div>
          <h1 className="text-2xl font-bold">Account</h1>
          <div>
            <p>Welcome, {user?.email}</p>
          </div>
        </div>
        <div>
          <button
            className="text-sm border px-4 py-2 rounded-2xl shadow-lg hover:shadow-2xl"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center my-12 py-8 rounded-div">
        <div className="w-full min-h-[300px]">
          <h2 className="text-2xl font-bold py-4">Watch List</h2>
          <SavedCoin />
        </div>
      </div>
    </section>
  );
};

export default Account;