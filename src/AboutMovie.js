import { useParams, useNavigate } from "react-router-dom";
import { data } from "./data";


function AboutMovie() {
    const navigate = useNavigate();
    const { title } = useParams();

    return (
        <div>
            {data.filter((item) => item.title === title).map((elem, index) => {
                return (
                    <div key={index}>
                        <h3>{elem.name}</h3>
                        <img 
                            src={elem.image}
                            alt="Movie"
                            width="350px"
                            height="500px"
                        />
                        <button onClick={() => navigate(-1)}>
                            Go Back
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default AboutMovie;

