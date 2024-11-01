
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='className= ml-8 bg-gray-100 text-white-800 flex justify-center space-x-8 '>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    </div>
    
  )
}

export default Navbar