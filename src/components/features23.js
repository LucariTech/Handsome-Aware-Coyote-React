import React from 'react'

import PropTypes from 'prop-types'

import './features23.css'

const Features23 = (props) => {
  return (
    <div className="features23-layout349 thq-section-padding">
      <div className="features23-max-width thq-section-max-width">
        <div className="features23-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="features23-text01 thq-body-small">
            {props.content1}
          </span>
          <button className="thq-button-filled features23-button">
            <span className="thq-body-small">{props.action1}</span>
          </button>
        </div>
        <div className="thq-grid-3">
          <div className="features23-container2 thq-card">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="features23-image thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature1Title}</h2>
            <span className="features23-text03 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
          <div className="features23-container3 thq-card">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="features23-image1 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature2Title}</h2>
            <span className="features23-text05 thq-body-small">
              {props.feature2Description}
            </span>
          </div>
          <div className="features23-container4 thq-card">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="features23-image2 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature3Title}</h2>
            <span className="features23-text07 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
          <div className="features23-container5 thq-card">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="features23-image3 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature4Title}</h2>
            <span className="features23-text09 thq-body-small">
              {props.feature4Description}
            </span>
          </div>
          <div className="features23-container6 thq-card">
            <img
              alt={props.feature5ImageAlt}
              src={props.feature5ImageSrc}
              className="features23-image4 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature5Title}</h2>
            <span className="features23-text11 thq-body-small">
              {props.feature5Description}
            </span>
          </div>
          <div className="features23-container7 thq-card">
            <img
              alt={props.feature6ImageAlt}
              src={props.feature6ImageSrc}
              className="features23-image5 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature6Title}</h2>
            <span className="features23-text13 thq-body-small">
              {props.feature6Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features23.defaultProps = {
  feature3Title: 'Cloud Computing',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature4Description:
    'Stay ahead of cyber threats with our cutting-edge cybersecurity solutions.',
  action1: 'Main action',
  feature5Title: 'Cloud Computing',
  feature3ImageAlt: 'Cloud Computing Image',
  feature1ImageAlt: 'Managed IT Services Image',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1600267165477-6d4cc741b379?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTI5NjMyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    'Maximize efficiency and flexibility with our cloud computing services.',
  feature5Description:
    'Harness the power of cloud computing for enhanced productivity and scalability.',
  feature2Description:
    'Protect your data and network from cyber threats with our advanced security solutions.',
  feature6Title: 'Feature 6',
  feature1Description:
    'Proactive monitoring and maintenance to keep your systems running smoothly.',
  feature6ImageAlt: 'Feature 1',
  feature1Title: 'Managed IT Services',
  feature4ImageAlt: 'Cybersecurity Solutions Icon',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1580130732455-6663b4ce9f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTI5NjEyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageAlt: 'Cybersecurity Solutions Image',
  feature6Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature2Title: 'Cybersecurity Solutions',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTI5NjEyMnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1680458841796-360a4cf4b3b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTI5NjEyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature6ImageSrc:
    'https://images.unsplash.com/photo-1711397817812-f65474247a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTI5NjMyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature5ImageAlt: 'Cloud Computing Icon',
  feature5ImageSrc:
    'https://images.unsplash.com/photo-1517504734587-2890819debab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTI5NjMyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature4Title: 'Cybersecurity Solutions',
  heading1: 'Our Features',
}

Features23.propTypes = {
  feature3Title: PropTypes.string,
  content1: PropTypes.string,
  feature4Description: PropTypes.string,
  action1: PropTypes.string,
  feature5Title: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature5Description: PropTypes.string,
  feature2Description: PropTypes.string,
  feature6Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature6ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature6Description: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature6ImageSrc: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  feature4Title: PropTypes.string,
  heading1: PropTypes.string,
}

export default Features23
