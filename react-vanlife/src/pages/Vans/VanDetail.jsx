
import { useState, useEffect } from 'react'
import { Link, useParams, useLocation } from "react-router-dom"
import { getVan } from '../../api'

export default function VanDetail() {
    const [van, setVan] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const {id} = useParams()
    const location = useLocation()
    console.log(location)

    useEffect(() => {
        // fetch(`/api/vans/${id}`)
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(id)
                setVan(data)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [id])

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h1>There was an error: {error.message}</h1>
    }

    const search = location.state?.search || "";
    const type = location.state?.type || 'all';
    
    return (
        <div className='van-detail-container'>
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>
        {van ? (
            <div className='van-detail'>
                <img src={van.imageUrl}/> 
                <div className={`van-tag van-tag-${van.type}`}>{van.type}</div>
                <h1>{van.name}</h1>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <div className='link-button'>Rent this van</div>
            </div>
            
        ) : <h1>Loading...</h1>
        }
        </div>
    )
}