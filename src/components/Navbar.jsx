import { Link } from "react-router-dom";
import userPhoto from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <div>{user && user?.displayName}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/">Career</Link>
        <Link to="/">About</Link>
      </div>
      <div className="login flex items-center gap-2">
        <div>
          <img
            className="w-12 h-12 border rounded-full object-cover"
            src={user ? user?.photoURL : userPhoto}
          />
        </div>
        {user && user?.email ? (
          <button
            onClick={logout}
            className="btn btn-neutral rounded-none px-10 text-white"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-neutral rounded-none px-10 text-white"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
