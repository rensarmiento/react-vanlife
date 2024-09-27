import {useOutletContext} from 'react-router-dom'
export default function HostVanPhotos () {
    const {hostVan} = useOutletContext();


    return (
        <div className='host-van-detail-images'>
            <img src={hostVan.imageUrl}/>
        </div>
    )
}