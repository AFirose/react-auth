import { Link, useNavigate } from "react-router-dom";

function Navbar({ setIsAuthenticated, isAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token and user info from sessionStorage
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");

    // Update auth state in App
    setIsAuthenticated(false);

    // Redirect to login page
    navigate("/login");
  };

  return (
    <nav>
      {isAuthenticated ? (
        <div>
          <span>Welcome</span>
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
