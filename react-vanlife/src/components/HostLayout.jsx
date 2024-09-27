import {NavLink} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
export default function HostLayout() {
    const styles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    } 
    return (
        <>
            <nav className='host-nav'>
                <NavLink 
                    to="." 
                    style={({isActive}) => isActive ? styles : null}
                    end
                >
                    Dashboard
                </NavLink>
                <NavLink 
                    to="income"
                    style={({isActive}) => isActive ? styles : null}    
                >
                    Income
                </NavLink>
                <NavLink 
                    to="reviews"
                    style={({isActive}) => isActive ? styles : null}
                >
                    Reviews
                </NavLink>
                
                <NavLink 
                    to="vans"
                    style={({isActive}) => isActive ? styles : null}    
                >
                    Vans
                </NavLink>
            </nav>
            <Outlet/>
        </>
    )
}