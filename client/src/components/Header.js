import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="navBar">
          Home
        </Link>
        <Link to="/About" className="navBar">
          About Us
        </Link>
        <Link to="/createride" className="navBar">
          Add Ride
        </Link>
        <Link to="/createpark" className="navBar">
          Add Park
        </Link>
      </nav>
    </header>
  )
}
export default Header
