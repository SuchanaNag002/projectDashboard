import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

// styles & images
import './Navbar.css'
import {BiBookBookmark} from "react-icons/bi";
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {
  const { logout, isPending } = useLogout()
  const {user}=useAuthContext()
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <BiBookBookmark/>
          <span>Project Forum</span>
        </li>

        {!user && (
          <>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          </>
        )}
        {user && (
        <li>
          {!isPending && <button className="btn" onClick={logout}>Logout</button>}
          {isPending && <button className="btn" disabled>Logging out...</button>}
        </li>
        )}
      </ul>
    </nav>
  )
}