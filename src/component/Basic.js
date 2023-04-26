import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Cover from '../assets/cover.jpg'
import Cover1 from '../assets/cover1.jpg'


export default function Basic() {
    

    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Cover}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Cover1}
            alt="Second slide"
          />
        </Carousel.Item>
         
      </Carousel>
    )
}
