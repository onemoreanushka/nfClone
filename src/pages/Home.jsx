import MovieCard from "../components/MovieCard";
import Movies from "../components/Movies";

function Home(){
    return (
        <>
            <div className="mx-auto mt-4 flex flex-wrap gap-4 w-[94%]">
            {
                Movies.map (m => <MovieCard img={m.image} name={m.title} slug={m.slug}></MovieCard> )
            }
            </div>
        </>
    )
}

export default Home;