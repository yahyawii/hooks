import CardMovie from "./CardMovie"

const ListMovies =({movies,setMovies})=>{
    return (
        <div className="List">
        {
          movies.map(movie=> <CardMovie key={movie.id} movie={movie} setMovies={setMovies} movies={movies}/>)

        }

        </div>

    )
}
export default ListMovies