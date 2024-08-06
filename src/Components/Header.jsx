import { Link } from "react-router-dom";

function Header() {
   return (
      <header>
         <h1 className="header">ItsTheNews</h1>
         <nav className="nav-bar">
            <ul>
               <li>
                  <Link to="/articles" id="nav-bar-select">
                     Articles
                  </Link>
               </li>
               <li>
                  <Link to="/topics" id="nav-bar-select">
                     Topics
                  </Link>
               </li>
               <li>
                  <Link to="/my-profile" id="nav-bar-select">
                     My Profile
                  </Link>
               </li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;
