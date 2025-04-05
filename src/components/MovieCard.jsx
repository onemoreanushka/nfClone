function MovieCard({img , title}){
    return (
        <>
            <div className="">
                <img className="w-[300px] flex-grow-0" src={img}></img>
            </div>
        </>
    )
}

export default MovieCard;