import {NavLink, Link} from 'react-router-dom'
export default function Header() {

    return (
        <header>        
            <Link className='nav-title' to="/">#VANLIFE</Link>
            <nav>
                <NavLink 
                    className= {({isActive}) => isActive ? 'active-link': null }
                    to="/"
                    >
                    Home
                </NavLink>

                <NavLink 
                    className= {({isActive}) => isActive ? 'active-link': null }
                    to="/host"
                    >
                    Host
                </NavLink>   

                <NavLink 
                    className= {({isActive}) => isActive ? 'active-link': null }
                    to="/about"
                >
                    About
                </NavLink>   

                <NavLink 
                    className= {({isActive}) => isActive ? 'active-link': null }
                    to="/vans"
                >
                Vans
                </NavLink>    
            </nav>
        </header>
    )
}