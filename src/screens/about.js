import React from 'react'
import './global.scss'
import { BannerArea } from '../component/banner_area'

export  const About = () =>{

    const items = [
        {
            id:1,
            title:" Values",
            resumes:" Proactivity"
        },
        {
            id:2,
            title:" Integrity",
            resumes:"Accountability"
        },
        {
            id:3,
            title:"Excellence",
            resumes:"Creativity",
            res:" Teamwork"
        }
    ]

    return (
        <section className='about'>
            <BannerArea title={'About US'}/> 
            <div className='res'>
                
                
                <h4> QUI SOMMES NOUS</h4>

                LIFE TRAVELS
            
                We are a strongly built logistic company approved by many partners, and we are

                Providing any Logistics Support Request to our Partners such as in  Tourism, Travel Support, Flight Tickets, 
                Accommodation Bookings, Airport Expeditions, Simultaneous Translator, Vehicle Renting, 
                Events management, Security Risk Assessment(Roads, Buildings, ferries,) 
                Customs Declaration&Clearence

                <p>
                    We are a Logistic Services company created since 2007, 
                    operating in 13 countries across the world and now operational in the Democratic Republic of Congo.
                </p>

                <h4>Mission</h4>
                To provide our customers outstanding logistics services throughout Africa and worldwide, facilitating their success and furthering their mission and expectations in the whole region.

                <h4>Vision</h4>
                Our aim is to act as an indispensable partner to our clients first within the DRC & Africa by helping them build and maximize sustainable competitive advantages.

                We do this by supporting them get quickly successful services as requested, efficiently, and safely.
            </div>
            
            <div className='about-box'>
                {
                    items.map((item) => 
                        <div className='about-card' key={item.id}>
                            <h4>{item.title}</h4>
                            <p>{item.resumes}</p>
                            <p>{item.res}</p>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

/*
SERVICES (énumérez les activités si possible ou chacun de vos services ) 
Le commerce général, l’importation et exportation, distribution, achat et vente des produits cosmétiques et des produits alimentaires ;

Toutes opérations concernant l’agence de voyages et de tous spectacles, d’édition, 
de publicité, toutes opérations directes ou indirectes concernant le tourisme et les vacances, 
la location de voitures, toutes opérations de réservation, d’organisation de voyages privés ou professionnels, 
en gros ou individuels, l’organisation des manifestations touristiques, hôtelières et sportives, 
et toutes activités annexes, toutes opérations d’agence immobilière ou de gérance d’immeuble, 
et toutes opérations se rattachant directement ou indirectement à l’objet social ou similaire en République Démocratique du Congo, 
en Afrique et partout dans le monde..

Le tout tant par elle-même que pour le compte de tiers ou en participation, 
sous quelque forme que ce soit, notamment par voie de création de société, 
de souscription, de commandite, de fusion ou d’absorption, d’avances, d’achat, 
ou de vente de titres et de droits sociaux, de cessions ou location de tout ou 
partie de ses biens et droits mobiliers et immobiliers ou par tout autre mode.

Services d’interprétations des langues et traductions simultanées 
aux particuliers comme aux organisations/ONG Internationales/Humanitaires.

Services de protocole simples et VIP dans les aéroports et agences de voyage ;

Facilitation et accompagnement d’accès aux services de médias, 
location salles de conférences, fournitures et restauration aux ateliers de travail, et autres.

Les opérations relatives à l’exploitation du transport terrestre, fluvial et aérien des personnes et des biens ;

L’exploitation de labos photos et la vente de matériels photographiques et accessoires ;

La vente des matériels informatiques et de télécommunication et l’exploitation des services informatique et bureautique ;

Le commerce des matériaux et accessoires de construction ;

Le tout directement ou indirectement pour son compte ou pour le compte de tiers, soit seul, 
soit avec des tiers par voie de création de sociétés nouvelles, d’apport, de fusion, 
de société en participation ou de prise de dation en location ou de gérance de tous biens ou de droits ou autrement

D’une manière générale, toutes opérations commerciales, industrielles et financières, 
mobilières, immobilières pouvant se rattacher directement ou indirectement à l’objet social ou à tous objets similaires ou connexes.
*/


