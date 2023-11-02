import { useParams, useNavigate } from "react-router-dom";
import { data } from "./data";
import { useState } from "react";


function AboutMovie() {
    const navigate = useNavigate();
    const { title } = useParams();

    const [showMore, setShowMore] = useState(false);

    const showTextClick = (elem) => {
        elem.showMore = !elem.showMore
        setShowMore(!showMore)
    }

    return (
        <div>
            {data.filter((item) => item.title === title).map((elem, index) => {
                return (
                    <div key={index}>
                        <div className="contEach">
                            <div>
                                <img 
                                    src={elem.image}
                                    alt="Movie"
                                    width="450px"
                                    height="600px"
                                    className="eachPhoto"
                                />
                            </div>

                            <div className="movieText">
                                <h2 className="movieTitle">{elem.name}</h2>
                                <h3 className="director">Director: {elem.director}</h3>
                                <h4>Year: {elem.year}</h4>
                                <h4>Length: {elem.length}</h4>
                                <p className="moviePlot">{showMore ? elem.description : elem.description.substring(0,170) + "..."}
                                    <button className="showBtn" onClick={() => {showTextClick(elem)}}>
                                        {showMore ? "Show less" : "Show more"}
                                    </button>
                                </p>
                                <p className="linkMore"><a href={elem.link} target="_blank" rel="noreferrer" className="moviePlot">Learn more at IMDB</a></p>
                            </div>
                        </div>
                        <div className="backCont">
                            <button className="backBtn" onClick={() => navigate(-1)}>
                                Go Back
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default AboutMovie;

