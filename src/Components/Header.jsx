function Header() {
   return (
      <header>
         <h1 className="header">ItsTheNews!!</h1>
         <nav className="nav-bar">
            <ul>
               <li>
                  <a href="/home" id="nav-bar-select">
                     Home
                  </a>
               </li>
               <li>
                  <a href="/topics" id="nav-bar-select">
                     Topics
                  </a>
               </li>
               <li>
                  <a href="/articles" id="nav-bar-select">
                     Articles
                  </a>
               </li>
               <li>
                  <a href="/my-profile" id="nav-bar-select">
                     My Profile
                  </a>
               </li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;
