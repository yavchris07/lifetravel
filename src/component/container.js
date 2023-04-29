import './style.scss'
// import 'aos/dist/aos.css';
import 'aos/dist/aos.css'
 
export function Container() {

    const items = [
        {
            id:1,
            title:"Le commerce général",
            resumes:""
        },
        {
            id:2,
            title:"l’importation et exportation",
            resumes:""
        },
        {
            id:3,
            title:" Distribution",
            resumes:""
        },
        {
            id:4,
            title:"Achat et vente des produits cosmétiques",
            resumes:""
        },
        {
            id:5,
            title:"Achat et vente des produits alimentaires",
            resumes:""
        },
    ]

    return (
        <section 
            className='container' 
            id='container' 
            // data-aos='fade-up'
        >
            {
                items.map((item) => 
                    <div className='card' key={item.id}>
                        <h4>{item.title}</h4>
                        <p>{item.resumes}</p>
                    </div>
                )
            }
        </section>
    )
}