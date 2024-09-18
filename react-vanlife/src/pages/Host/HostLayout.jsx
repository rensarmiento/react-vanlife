import {Link} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
export default function HostLayout() {
    return (
        <>
            <nav>
                <Link to="host">Dashboard</Link>
                <Link to="income">Income</Link>
                <Link to="reviews">Reviews</Link>
                <Link to="vans">Vans</Link>
            </nav>
            <Outlet/>
        </>
    )
}