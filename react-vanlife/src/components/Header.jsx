import {NavLink, Link} from 'react-router-dom'
export default function Header() {

    return (
        <header>        
            <Link className='nav-title' to="/">#VANLIFE</Link>
            <nav>
                <NavLink 
                    className= {({isActive}) => isActive ? 'active-link': 'nav-link-home' }
                    to="/"
                    >
                    Home
                </NavLink>

                <NavLink 
                    className= {({isActive}) => isActive ? 'active-link': 'nav-link-home' }
                    to="/host"
                    >
                    Host
                </NavLink>   

                <NavLink 
                    className='nav-link-about' 
                    to="/about"
                    >
                        About
                    </NavLink>    
                <NavLink 
                    className='nav-link-vans' 
                    to="/vans"
                >
                Vans
                </NavLink>    
            </nav>
        </header>
    )
}