import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import VanDetail from './VanDetail'
export default function Vans() {

    const [vansData, setVansData] = useState([])
    const [vans, setVans] = useState([])

    useEffect(() => {
        console.log("effect ran")
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => {
                setVansData(data.vans);
                setVans(vansData);
            })
    }, [])

    console.log(vans)

    function filter(vanType="") {
        console.log("filtering for: " + vanType)
        const vanArray = vanType==="" ? setVans(vansData) : setVans(vansData.filter(van => van.type === vanType)) 
        return vanArray

    }

    function createVanElement(van) {
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
    }

    const vanElements = vans.map(van => createVanElement(van))


    return (
        <div className='vans-page-container'>
            {/* <h1>Vans page goes here 🚐</h1> */}
            <h1>Explore our van options</h1>
            <div className='button-container'>                
                <button className='filter-btn' onClick={() => filter("simple")}>Simple</button>
                <button className='filter-btn' onClick={() => filter("luxury")}>Luxury</button>
                <button className='filter-btn' onClick={() => filter("rugged")}>Rugged</button>
                <button className='clear-btn' onClick={() => filter("")}>Clear filters</button>
            </div>
            <div className='vans-page-content'>      
                {vanElements}
            </div>
        </div>
    )
}

/*
vanElements = createVanElement()
van elements = vans data
when filter is clicked van elements equals only the elements else show all elements 
*/

