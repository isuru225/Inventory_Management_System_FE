import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
//import Carousal from 'src/components/Carousel';
import { useNavigate } from 'react-router-dom';


import {
    CContainer,
    CRow,
    CCol
} from '@coreui/react'

import Card from "src/components/Card";
//import { Button } from '@coreui/coreui';

const Home = () => {
    const [movies, setMovies] = useState([]);

    const navigate = useNavigate();

    // const getAllMovieItems = () => {
    //     axios
    //         .get('http://localhost:5014/api/Movie',{
    //             headers:{
    //               'Accept':'*/*',
    //               'Content-Type':'application/json',
    //               Authorization:'Bearer ' + localStorage.getItem('token')
    //             }
    //           })
    //         .then((response) => {
    //             const movieArray = response.data.map((movie, index) => {
    //                 console.log(index, movie);
    //                 return (
    //                     <CCol sm="auto" key={index}><Card movie={movie} /></CCol>
    //                 )
    //             })
    //             setMovies(movieArray);

    //         })
    //         .catch((err) => {
    //             console.log("Error: ", err);
    //         })
    // }

    // useEffect(() => {
    //     getAllMovieItems();
    // }, [])

    return (
        <>
            {/* <div>
                <Carousal />
            </div>
            <div>
            <CContainer>
                <CRow>
                    {movies}
                </CRow>
            </CContainer>
            </div> */}
            {/* <button onClick={()=>{navigate('/seat-plan')}}>
                Seats
            </button> */}
        </>
    )
}

export default Home;