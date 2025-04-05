import { useParams } from "react-router-dom";
import Movies from "../components/Movies";
import ReactPlayer from "react-player";

function Details(){
    let {slug} = useParams();
    let currMovie = Movies.find((mov)=> {
        return mov.slug === slug;
    })


    return (
        <>
            <div className="relative w-[94%] mx-auto h-[50vw] overflow-hidden ">
                <ReactPlayer muted="true" playing="true" loop="true" width="94vw" height="50vw" url={currMovie.youtube_trailer}></ReactPlayer>
                <div className="absolute top-64 left-14 w-[420px]">
                    <p className="text-white text-4xl font-bold">{currMovie.title}</p>
                    <p className="text-white">{currMovie.year}</p>
                    <p className="text-white">{currMovie.genre}</p>
                    <p className="text-white">{currMovie.description}</p>
                    <p className="text-white">Director: {currMovie.director}</p>
                    <p className="text-white">Actors: {currMovie.actor}</p>
                    <p className="text-white bg-blue-950 inline-block px-4 py-1 rounded-sm">imdb Rating: {currMovie.imdb_rating}</p>
                </div>
            </div>
        </>
    )
}

export default Details;