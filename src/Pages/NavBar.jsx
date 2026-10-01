import "../css/Navbar.css";

function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">MovieBox</div>
      <nav aria-label="Main navigation">
        <ul className="navbar-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Favorites</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
