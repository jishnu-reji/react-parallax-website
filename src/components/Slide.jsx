import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/resort1.jpg'
import image2 from '../images/resort2.jpg'
import image3 from '../images/resort3.jpg'


function Slide() {
  return (
    <div className='pb-5 '>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className='curim' src={image1} alt=""/>
        <Carousel.Caption>
          <h3>POOL</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className='curim' src={image2} alt="" />
        <Carousel.Caption>
          <h3>COUTAGES</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className='curim' src={image3} alt="" />
        <Carousel.Caption>
          <h3>VIEW POINTS</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slide