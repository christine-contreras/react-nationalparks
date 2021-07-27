import React from 'react'
import '../../css/Hero.css'
import Form from './Form'

import { Typography } from '@material-ui/core'

const Hero = ({ fetchingParks }) => {
    const images = [
        {
            src: 'https://images.unsplash.com/photo-1608233695800-34245ba7274f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            description: 'Yellowstone National Park, United States'
        },
        {
            src: 'https://images.unsplash.com/photo-1606859309981-270838d57ed8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
            description: 'Arches National Park, Utah, USA'
        }
    ]

    return (
        <div className="hero">
            <div className="hero-image-1">
                 <img className="img" src={images[0].src} alt={images[0].description} title={images[0].description} />
            </div>

            <div className="hero-content">
                <Typography variant="h2" component="h1" color="secondary" gutterBottom>
                    Start Your Park Adventure Today
                </Typography>
                <Form fetchingParks={fetchingParks}/>
             </div>

             <div className="hero-image-2">
                 <img className="img" src={images[1].src} alt={images[1].description} title={images[1].description} />
            </div>


        </div>
    )

}

export default Hero
