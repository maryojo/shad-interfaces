import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex-shrink-0 flex items-center">
                Home
              </Link>
              <Link to="/profile-page-1" className="ml-6 flex items-center">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar