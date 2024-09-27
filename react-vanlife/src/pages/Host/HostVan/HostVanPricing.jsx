import {useOutletContext} from 'react-router-dom'
export default function HostVanPricing () {
    const {hostVan} = useOutletContext();

    return (
        <div className='host-van-detail-pricing'>
            <p><span>${hostVan.price}</span>/day</p>
        </div>
    )
}