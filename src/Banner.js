import React, { useState, useEffect } from 'react'
import './Banner.css'
import axios from "./axios";
import request from './request'

function Banner() {
    const [movie, setMovie] = useState(0);

    useEffect(() => {
        async function fetchData(){
            const requestMovie = await axios.get(request.fetchTrending);
            console.log(requestMovie.data.results[
                Math.floor(Math.random()* requestMovie.data.results.length - 1)
            ])
            setMovie(
                requestMovie.data.results[
                    Math.floor(Math.random()* requestMovie.data.results.length - 1)
                ]
            )
        }
        fetchData();
    }, [])

    return (
        <div className= 'banner'>
            {movie.title}
        </div>
    )
}

export default Banner
