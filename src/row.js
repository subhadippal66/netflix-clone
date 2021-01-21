import React, {useState , useEffect} from 'react'
import axios from "./axios";
import './Row.css';
const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            //console.log(request.data.results);
        }
        fetchData();
    },[fetchUrl])

    //console.log(movies);
    return (
        <div className = 'row'>
            <h2>{title}</h2>
            <div className = 'posters_list'>
                {movies.map(movie => (
                    
                    <img 
                        
                     className =  {`poster`}
                     key = {movie.id}
                     src= {`${baseImageUrl}${movie.poster_path}`} 
                     alt= {movie.name} />
                    
                ))}
            </div>

        </div>
    )
}

export default Row
