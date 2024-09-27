import {useEffect, useState} from 'react'
import {Link, useSearchParams, useLocation} from 'react-router-dom'
import { getVans } from '../../api'

export default function Vans() {

    const [vansData, setVansData] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get('type')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVansData(data)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, [])
    
    const displayedVans = typeFilter 
        ? vansData.filter(van => van.type === typeFilter)
        : vansData
    const vanElements = displayedVans.map(van => createVanElement(van))

    // function filter(vanType="") {
    //     console.log("filtering for: " + vanType)
    //     const vanArray = vanType=== "" ? setVans(vansData) : setVans(vansData.filter(van => van.type === vanType)) 
    //     return vanArray
    // }

    function createVanElement(van) {
        return (
            <div className={`van ${van.id}`} key={van.id}>
                <Link 
                    to={`${van.id}`} 
                    state={{
                        search: `?${searchParams.toString()}`,
                        type: typeFilter,
                    }}
                >  
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

    function handleFilter(key, value) {
        setSearchParams(prevParams => {
            if (value===null) {
                prevParams.delete(key) 
            } else {
                prevParams.set(key,value)
            }
            return prevParams
        })

    }
    if (loading) {
        return <h1>Loading...</h1>
    }
    
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }
    return (
        <div className='vans-page-container'>
            {/* <h1>Vans page goes here 🚐</h1> */}
            <h1>Explore our van options</h1>
            <div className='button-container'>                
                <button 
                    onClick={()=>handleFilter("type", "simple")}
                    className={
                        `van-type simple 
                        ${typeFilter === 'simple' ? 'selected' : ''}`}
                    >Simple
                </button>

                <button 
                    onClick={()=>handleFilter("type", "luxury")}
                    className={
                        `van-type luxury 
                        ${typeFilter === 'luxury' ? 'selected': ''}`}
                >Luxury</button>
                <button 
                    onClick={()=>handleFilter("type", "rugged")}
                    className={
                        `van-type rugged 
                        ${typeFilter === 'rugged' ? 'selected' : ''}`
                    }
                >Rugged</button>
                {typeFilter && <button onClick={()=>handleFilter("type", null)} className='clear-btn'>Clear filters</button>}
            </div>
            
            <div className='vans-page-content'>      
                { vanElements }
            </div>
        </div>
    )
}


