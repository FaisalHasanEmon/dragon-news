import { Link } from "react-router-dom";
import userPhoto from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <div>{user && user.email}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex items-center gap-2">
        <div>
          <img src={userPhoto} />
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
