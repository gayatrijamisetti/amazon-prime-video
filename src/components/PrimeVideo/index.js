import MoviesSlider from '../MoviesSlider'
import {
  PrimeVideoContainer,
  PrimeImage,
  MoviesContainer,
  Heading,
} from './styledComponents'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <>
      <PrimeVideoContainer>
        <PrimeImage
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
        <MoviesContainer>
          <Heading>Action Movies</Heading>
          <MoviesSlider moviesList={actionMoviesList} />
          <Heading>Comedy Movies</Heading>
          <MoviesSlider moviesList={comedyMoviesList} />
        </MoviesContainer>
      </PrimeVideoContainer>
    </>
  )
}

export default PrimeVideo
