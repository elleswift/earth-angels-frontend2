import React from 'react'
import PropTypes from 'prop-types'

const Video = ({videoId}) => (
  <div className = 'embed-video-responsive'>
    <iframe
      width='900'
      height='400'
      src={`https://www.youtube.com/embed/${videoId}?&autoplay=1&loop=1&playlist=${videoId}&mute=1`}
      frameborder = '0'
      title = 'Video'
      
      />
  </div>
)

Video.propTypes = {
  embedId: PropTypes.string.isRequired
}

export default Video