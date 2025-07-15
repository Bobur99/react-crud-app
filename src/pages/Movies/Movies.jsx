import MoviesCard from "../../components/MoviesCard/MoviesCard";
import { movies } from "../../movies.js";

function Movies() {
  return (
    <div className="min-h-screen">
      <div className="container dark:text-white">
        <h1>Movies page</h1>
        <div className="w-full flex justify-center flex-wrap gap-10">
          {movies.map((item) => (
            <MoviesCard key={item.movieId} movie={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;
