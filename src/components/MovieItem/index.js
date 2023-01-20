import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

import {
  MovieItemsBgContainer,
  MovieImage,
  PopupContainer,
  CloseButton,
  VideoPlayerContainer,
} from './styledComponent'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <MovieItemsBgContainer>
      <Popup
        modal
        trigger={<MovieImage src={thumbnailUrl} alt="thumbnail" />}
        className="popup-content"
      >
        {close => (
          <PopupContainer>
            <CloseButton
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </CloseButton>
            <VideoPlayerContainer>
              <ReactPlayer url={videoUrl} controls />
            </VideoPlayerContainer>
          </PopupContainer>
        )}
      </Popup>
    </MovieItemsBgContainer>
  )
}

export default MovieItem
