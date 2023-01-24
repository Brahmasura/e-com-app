import { Outlet, Link } from "react-router-dom";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";

import './navigation.styles.scss';

const Navigation = () => {
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
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
