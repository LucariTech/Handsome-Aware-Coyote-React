import React from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div className="hero9-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero9-image"
      />
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h1 className="hero9-text thq-heading-1">{props.heading1}</h1>
          <p className="hero9-text1 thq-body-large">{props.content1}</p>
          <div className="hero9-actions">
            <button className="thq-button-filled hero9-button">
              <span className="hero9-text2 thq-body-small">
                {props.action1}
              </span>
            </button>
            <button className="thq-button-outline hero9-button1">
              <span className="hero9-text3 thq-body-small">
                {props.action2}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  content1:
    'We offer a wide range of IT services to help your business succeed in the digital world. From network security to cloud solutions, we have you covered.',
  image1Alt: 'IT Services Image',
  action2: 'Get Started',
  heading1: 'Professional IT Services for Your Business',
  action1: 'Learn More',
  image1Src:
    'https://images.unsplash.com/photo-1531403009284-440f080d1e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTI5NjEyMnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero9.propTypes = {
  content1: PropTypes.string,
  image1Alt: PropTypes.string,
  action2: PropTypes.string,
  heading1: PropTypes.string,
  action1: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Hero9
