import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase/Firebase.utility";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log("navigation user", currentUser);


  return (
    <>
      <div className="navigation">
        <div className="logo-container">
          <Link to="/">
            <CrwnLogo className="logo" />
          </Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser} >SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN-IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
