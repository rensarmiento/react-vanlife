import {useOutletContext} from 'react-router-dom'
export default function HostVanDetail () {
    const { hostVan } = useOutletContext();

    return (
        <div className='host-van-detail-selection'>
            <p><span>Name:</span> {hostVan.name}</p>
            <p><span>Category:</span> {hostVan.type}</p>
            <p><span>Description:</span> {hostVan.description}</p>
            <p><span>Visibility:</span> Public</p>
        </div>
    )
}

