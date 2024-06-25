import React from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2 features1-text1">
              {props.sectionTitle}
            </h2>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="features1-content">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content1 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <button className="thq-button-outline features1-button1">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature3ImageAlt: 'Cloud Computing Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1580130732455-6663b4ce9f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTI5NjEyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  slogan: 'Empowering Your Business Through Technology',
  feature2Title: 'Cybersecurity Solutions',
  sectionDescription:
    'Explore the range of IT services we offer to help your business succeed.',
  mainAction: 'Learn More',
  secondaryAction: 'Contact Us',
  feature1ImageAlt: 'Managed IT Services Image',
  feature2ImageAlt: 'Cybersecurity Solutions Image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1680458841796-360a4cf4b3b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTI5NjEyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTI5NjEyMnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    'Protect your data and network from cyber threats with our advanced security solutions.',
  sectionTitle: 'Our Services',
  feature3Description:
    'Maximize efficiency and flexibility with our cloud computing services.',
  feature1Description:
    'Proactive monitoring and maintenance to keep your systems running smoothly.',
  feature3Title: 'Cloud Computing',
  feature1Title: 'Managed IT Services',
}

Features1.propTypes = {
  feature3ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  slogan: PropTypes.string,
  feature2Title: PropTypes.string,
  sectionDescription: PropTypes.string,
  mainAction: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1Title: PropTypes.string,
}

export default Features1
