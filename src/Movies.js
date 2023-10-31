import Buttons from "./Buttons";
import Page from "./Page";
import { data } from "./data";
import { useState } from "react";

function Movies() {

const [movies, setMovies] = useState(data);


    return (
        <div>
            <div className="cont two">
                <h2 className="two">New movies every Tuesday!</h2>
            </div>
            <div className="cont">
                <Buttons 
                    data={data}
                    setMovies={setMovies} 
                />
            </div>
            <div className="cont">
                <Page allMovies={movies}/>
            </div>
        </div>
    )
}

export default Movies;