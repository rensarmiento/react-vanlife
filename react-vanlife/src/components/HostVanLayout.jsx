import {useEffect, useState} from 'react'
import {useParams, Link, NavLink, Outlet} from 'react-router-dom'
import { getVan } from '../api'

export default function HostVanLayout () {
    const [hostVan, setHostVan] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        async function loadVans() {
            console.log("Host useEffect ran")
            setLoading(true)
            try {
                const data = await getVan(id)
                setHostVan(data)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [id])

    const styles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    } 

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className='host-van-detail-container'>
            
            <Link 
                to=".."
                relative="path"
            >
                &larr; Back to all vans
            </Link>
            
            <div className='host-van-detail'>
                <div className='van-detail-head'>
                    <img src={hostVan.imageUrl}/>
                    <div>
                        <div className={`van-tag van-tag-${hostVan.type}`}>{hostVan.type}</div>
                        <h2>{hostVan.name}</h2>
                        <p>{hostVan.price}<span>/day</span></p>
                    </div>
                </div>
                <span>
                    <NavLink 
                        to="." 
                        style={({isActive}) => isActive ? styles : null}
                        end
                    >
                        Detail
                    </NavLink>
                    <NavLink 
                        to="pricing" 
                        style={({isActive}) => isActive ? styles : null}
                
                    >
                        Pricing
                    </NavLink>
                    <NavLink 
                        to="photos" 
                        style={({isActive}) => isActive ? styles : null}
                        
                    >
                        Photos
                    </NavLink>
                </span>
                <Outlet context={{ hostVan, setHostVan }}/>
            </div>
        </div>

    )
}