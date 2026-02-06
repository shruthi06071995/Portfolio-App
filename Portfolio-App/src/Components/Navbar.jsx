import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Shruthi</Link>

        <button className="navbar-toggler" onClick={() => setOpen(!open)}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`navbar-collapse ${open ? "show" : "collapse"}`}>
          <ul className="navbar-nav ms-auto mt-3">
            <li><Link className="nav-link" to="/" onClick={()=>setOpen(false)}>Home</Link></li>
            <li><Link className="nav-link" to="/about" onClick={()=>setOpen(false)}>About</Link></li>
            <li><Link className="nav-link" to="/projects" onClick={()=>setOpen(false)}>Projects</Link></li>
            <li><Link className="nav-link" to="/contact" onClick={()=>setOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
