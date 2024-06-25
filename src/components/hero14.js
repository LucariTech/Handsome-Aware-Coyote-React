import React from 'react'

import PropTypes from 'prop-types'

import './hero14.css'

const Hero14 = (props) => {
  return (
    <div className="hero14-container thq-section-padding">
      <div className="hero14-max-width thq-section-max-width">
        <div className="hero14-column">
          <div className="hero14-content">
            <h1 className="hero14-text thq-heading-1">{props.heading1}</h1>
            <p className="hero14-text1 thq-body-large">{props.content1}</p>
            <div className="hero14-actions">
              <button className="thq-button-filled hero14-button">
                <span className="thq-body-small">{props.action1}</span>
              </button>
              <button className="thq-button-outline hero14-button1">
                <span className="thq-body-small">{props.action2}</span>
              </button>
            </div>
          </div>
        </div>
        <video
          src={props.video1Src}
          loop="true"
          muted="true"
          poster={props.video1Poster}
          autoPlay="true"
          className="hero14-video thq-img-ratio-4-3"
        ></video>
      </div>
    </div>
  )
}

Hero14.defaultProps = {
  video1Poster:
    'https://images.pexels.com/videos/7535099/pictures/preview-0.jpg',
  action2: 'Get Started',
  content1:
    'We offer a wide range of IT services to help your business succeed in the digital world. From network security to cloud solutions, we have you covered.',
  action1: 'Learn More',
  heading1: 'Professional IT Services for Your Business',
  video1Src:
    'https://videos.pexels.com/video-files/7535099/7535099-hd_1280_720_25fps.mp4',
}

Hero14.propTypes = {
  video1Poster: PropTypes.string,
  action2: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
  video1Src: PropTypes.string,
}

export default Hero14
