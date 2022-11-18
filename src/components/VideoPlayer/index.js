import ReactPlayer from 'react-player'

import {
  VideoPlayerContainer,
  VideoTitle,
  VideoStats,
  HorizontalLine,
} from './styledComponents'

import './index.css'

const videoUrl = 'https://youtu.be/ykpWl-gXZ6s'

const VideoPlayer = () => (
  <VideoPlayerContainer>
    <ReactPlayer
      url={videoUrl}
      controls
      width="100%"
      className="video-player"
    />
    <VideoTitle>Veerasimha Reddy</VideoTitle>
    <VideoStats>8,100,195 views - Nov 18, 2022</VideoStats>
    <HorizontalLine />
  </VideoPlayerContainer>
)

export default VideoPlayer
