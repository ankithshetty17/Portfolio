import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img5.jpg'
import IMG2 from '../../assets/img2.jpg'
import IMG3 from '../../assets/img3.jpg'
import IMG4 from '../../assets/img4.jpg'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Weather App</h3>
            <small className='text-light'>Flutter | Dart | Openweather API</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/ankithshetty17/Weather-Mobileapp.git" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Weather Web-App</h3>
            <small className='text-light'>React.js | CSS | Openweather API</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/ankithshetty17/Weather-Webapp.git" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>Video-Calling App</h3>
            <small className='text-light'>Flutter | Dart | ZegoCloud</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/ankithshetty17/Videocalling-App.git" target="_blank" rel='noreferrer' className='btn'>Github</a>
              </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>Bike Rental App</h3>
            <small className='text-light'>Flutter | Dart | Figma</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/ankithshetty17/BikeRent.git" target="_blank" rel='noreferrer' className='btn'>Github</a>
           </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects