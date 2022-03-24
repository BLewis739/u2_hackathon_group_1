import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About Us</Link>
        <Link to="/Parks">Our Parks</Link>
        <Link to='/createride'>Add Ride</Link>
        <Link to='/createpark'>Add Park</Link>
      </nav>
    </header>
  )
}
export default Header
