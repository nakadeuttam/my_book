import * as React from 'react'
import {Link , useLocation} from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  let location = useLocation();
 React.useEffect(() => {
    console.log(location)
  }, [location]);

 
  const NAV_style={backgroundColor : "#253a59"};
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={NAV_style}>
  <div className="container-fluid">
    <Link className={` navbar-brand ${location.pathname==="/home" ? "active font-weight-bold" :""}`} to="/home">My_Book</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link  icon-link icon-link ${location.pathname==="/about" ? "active font-weight-bold" :""}`} aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/temp" ? "active font-weight-bold" :""}`} to="/temp">Link</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
