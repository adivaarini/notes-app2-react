import { Link, useLocation } from "react-router-dom";
import { MdOutlineSendAndArchive } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import ActionTheme from "./ActionTheme";

const ActionMenuHeader = () => {
  const { pathName } = useLocation();

  return (
    <nav className="navigation">
      <ul>
        <li>
          {pathName !== "/archives" ? (
            <Link to="/archives" className="header-icon" title="Arsip">
              <MdOutlineSendAndArchive />
            </Link>
          ) : (
            <Link to="/" className="header-icon" title="Beranda">
              <AiOutlineHome />
            </Link>
          )}
        </li>
        <li>
          <ActionTheme />
        </li>
      </ul>
    </nav>
  );
};

export default ActionMenuHeader;