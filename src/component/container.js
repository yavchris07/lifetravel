import './style.scss'
// import 'aos/dist/aos.css';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import items from './items'
 
export function Container() {



    return (
        <section 
            className='container' 
            id='container' 
            // data-aos='fade-up'
        >
            {
                items.map((item) => 
                    <Link to={`/services/${item.id}`} style={{textDecoration:'none'}}>
                        <div className='card' key={item.id}>
                            <h4>{item.title}</h4>
                            {/* <p>{item.resumes}</p> */}
                        </div>
                    </Link>
                )
            }
        </section>
    )
}