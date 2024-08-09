import { Link } from "react-router-dom";

function Header() {
   return (
      <div>
         <h1 className="header-logo-h1-1">ItsTheNEWS</h1>
         <header>
            <nav className="nav-bar-container">
               <ul>
                  <li id="nav-bar-list">
                     <Link to="/articles" id="nav-bar-select">
                        ARTICLES
                     </Link>
                  </li>
                  <li>
                     <Link to="/topics" id="nav-bar-select">
                        TOPICS
                     </Link>
                  </li>
                  <li>
                     <Link to="/my-profile" id="nav-bar-select">
                        PROFILE
                     </Link>
                  </li>
               </ul>
            </nav>
         </header>
      </div>
   );
}

export default Header;
