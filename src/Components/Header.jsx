import { Link } from "react-router-dom";

function Header() {
   return (
      <div>
         <Link to="/articles" id="nav-bar-select">
            <ul>
               <li id="logo-container">
                  <h1 className="header-logo-h1-1">
                     ItsTheNEWS
                     {/* <h1 className="header-logo-h1-2">EWS</h1> */}
                  </h1>
               </li>
            </ul>
         </Link>
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <nav className="nav-bar-container">
            <br />
            <ul>
               <li>
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
         <br />
         <br />
         <br />
         <br />
         <br />
      </div>
   );
}

export default Header;
