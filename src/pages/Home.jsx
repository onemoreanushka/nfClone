import MovieCard from "../components/MovieCard";
import Movies from "../components/Movies";

function Home(){
    return (
        <>
            <div className="flex flex-wrap gap-4 w-[95%] mx-auto mt-4">
            {
                Movies.map (m => <MovieCard img={m.image} name={m.title} ></MovieCard> )
            }
            </div>
        </>
    )
}

export default Home;