import {Link} from 'react-router-dom'
export default function Header() {
    return (
        <nav className='navbar'>
            <Link className='nav-link-title' to="/">#VANLIFE</Link>
            <Link className='nav-link-home' to="/">Home</Link>    
            <Link className='nav-link-host' to="/host">Host</Link>    
            <Link className='nav-link-about' to="/about">About</Link>    
            <Link className='nav-link-vans' to="/vans">Vans</Link>    
        </nav>
    )
}