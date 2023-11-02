import { Link } from "react-router-dom";

function Page({allMovies}) {
    return (
        <div className="cont">
        {allMovies.map (( item => {
            const {id, name, year, type, image, director, link, description, length, showMore} = item;

            return (
                <div key={id} className="movieCard">
                    <Link to={`/movies/${item.title}`}>
                        <img src={image} alt="Movie" width="350px" height="500px" />
                    </Link>
                    <p className="movieTitle">{name}</p>
                    <p className="movieYear">{year}</p>
                </div>
            )
        }))}
        </div>
    )
}

export default Page;