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


