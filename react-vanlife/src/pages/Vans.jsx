import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import VanDetail from './VanDetail'
export default function Vans() {

    const [vansData, setVansData] = useState([])

    useEffect(() => {
        console.log("effect ran")
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVansData(data.vans))
    }, [])

    console.log(vansData.vans)

    const vanElements = vansData.map(van => {
        return (
            <div className={`van ${van.id}`} key={van.id}>
                    <Link to={`/vans/${van.id}`} element={<VanDetail />}>  
                    <img src={van.imageUrl}/>
                    <div className='van-text-content'>
                        <span>{van.name}</span>
                        <span>${van.price}<span>/day</span></span>
                    </div>
                    <div className={`van-tag van-tag-${van.type}`}>{van.type}</div>
                    </Link>
                </div>
        )
    })

    return (
        <div className='vans-page-container'>
            {/* <h1>Vans page goes here 🚐</h1> */}
            <h1>Explore our van options</h1>
            <div className='button-container'>                
                <button className='filter-btn'>Simple</button>
                <button className='filter-btn'>Luxury</button>
                <button className='filter-btn'>Rugged</button>
                <button className='clear-btn'>Clear filters</button>
            </div>
            <div className='vans-page-content'>      
                {vanElements}
            </div>
        </div>
    )
}