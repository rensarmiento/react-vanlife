import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { getHostVans } from "../../api"


export default function HostVanDetail () {
    const [hostVans, setHostVans] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        console.log("Host useEffect ran")
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans()
                setHostVans(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])

    const hostVanElements = hostVans.map(van => (
            <div className="host-van" key={van.id}>
                <Link to={`${van.id}`}>
                <img src={van.imageUrl}/>
                <span> <h3>{van.name}</h3><p>${van.price}/day</p> </span>
                {/* <button>Edit</button> */}
                </Link>
            </div>
    ))

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className='host-vans-container'>
            <h1>Your listed vans</h1>
            {hostVanElements}
        </div>
    )
}