import {useEffect, useState} from 'react'
import {useParams, Link, NavLink, Outlet} from 'react-router-dom'
export default function HostVanDetail () {
    const [hostVan, setHostVan] = useState({})
    const params = useParams();
    useEffect(() => {
            console.log("Host useEffect ran")
            fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setHostVan(data.vans[0]))
    }, [])

    const styles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    } 

    console.log(hostVan)
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