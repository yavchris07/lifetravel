import React,{useEffect,useState} from 'react'
import { BannerArea } from '../component/banner_area'
import { useParams } from 'react-router-dom';
import items from '../component/items';

export function ServicesDetails() {
    const { id } = useParams();
    const [services, setServices] = useState('');
  
    useEffect(() => {
      let services = items.find(services => services.id === parseInt(id))
  
      if (services) {
        setServices(services)
      }
    }, [id])
    return (
        <div>
            {/* adding services?():(La liste eest vide, mercie)  */}
            <BannerArea title={services.title}/>
            <div style={{width:`80%`,margin:`auto`}}>
                <p>{services.resumes}</p>
            </div>
        </div>
    )
}
