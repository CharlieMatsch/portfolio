import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex gap-8">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Navbar