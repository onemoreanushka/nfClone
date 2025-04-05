import { Link } from "react-router-dom";

function MovieCard({img , slug}){
    return (
        <>
            <Link to={`/details/${slug}`}>
                <div className="">
                    <img className="w-[300px] h-[400px] object-cover rounded-lg" src={img}></img>
                </div>
            </Link>
        </>
    )
}

export default MovieCard;