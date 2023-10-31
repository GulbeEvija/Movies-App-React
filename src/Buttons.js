function Buttons({data, setMovies}) {

    const filteredMovies = type => {
        const filteredResult = [];
        data.forEach(item => {
            item.type.forEach(term => {
                if (term === type) {
                    filteredResult.push(item);
                    setMovies(filteredResult);
                }
            })
        })
    }
    return (
        <div>
            <button onClick={() => filteredMovies("Top Rated")} className="categoryBtn">Top Rated</button>
            <button onClick={() => filteredMovies("adventure")} className="categoryBtn">Adventure</button>
            <button onClick={() => filteredMovies("comedy")} className="categoryBtn">Comedy</button>
            <button onClick={() => filteredMovies("action")} className="categoryBtn">Action</button>
            <button onClick={() => filteredMovies("drama")} className="categoryBtn">Drama</button>
            <button onClick={() => filteredMovies("romance")} className="categoryBtn">Romance</button>
            <button onClick={() => filteredMovies("horror")} className="categoryBtn">Horror</button>
            <button onClick={() => setMovies(data)} className="categoryBtn">All movies</button>
        </div>
    )
}

export default Buttons;