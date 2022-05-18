import "./styles.css";

function Navbar() {
  return (
    <nav className="d-flex bd-highlight mb-3 navbar navbar-expand-md container-fluid bg-primary main-nav">
      <div className="me-auto p-2 bd-highlight main-menu-home">Carros Top</div>
      <div className="p-2 bd-highlight main-menu">
        <a href="/">Home</a>
      </div>
      <div className="p-2 bd-highlight main-menu">
        <a href="/catalog">Catálogo</a>
      </div>
    </nav>
  );
}

export default Navbar;
