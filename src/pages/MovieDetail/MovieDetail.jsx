import { useParams } from 'react-router-dom'
import { movies } from '../../movies'

function MovieDetail() {
    const {id} = useParams()

    const detalInfoMovies = movies.find(item => item.movieId == +id)

  return (
    <div className='container text-white min-h-screen'>
        <h1>Movie Detail info</h1>
        <div className="min-w-full p-[15px]">
            <div className="detail-wrapper-img !mb-1.5">
                <img src={detalInfoMovies.posterUrl} alt={detalInfoMovies.movieTitle} />
            </div>
            <h3>{detalInfoMovies.movieTitle}</h3>
        </div>
    </div>
  )
}

export default MovieDetail