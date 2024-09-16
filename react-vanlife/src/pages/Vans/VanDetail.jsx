
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
export default function VanDetail() {
    const [van, setVan] = useState(null)
    const param = useParams()

    useEffect(() => {
        fetch(`/api/vans/${param.id}`)
        .then(res => res.json())
        .then(data=> setVan(data.vans))
    }, [param.id])


    return (
        <div className='van-detail-container'>
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