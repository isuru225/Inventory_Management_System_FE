import React, { useEffect } from "react";
import { useState } from "react";
import { setSeatIDs } from "src/action";
import { useDispatch } from "react-redux";
import {
    CContainer,
    CRow,
    CCol,
    CButton
} from '@coreui/react'
import { element } from "prop-types";
import axios from "axios";
import PropType from 'prop-types'


const Theater = (props) => {
    const {seats} = props;

    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedSeatElementsInRowD, setSelectedSeatElementsInRowD] = useState([]);
    const [selectedSeatElementsInRowC, setSelectedSeatElementsInRowC] = useState([]);
    const [selectedSeatElementsInRowB, setSelectedSeatElementsInRowB] = useState([]);
    //const [seatIdString,setSeatIdString] = useState();
    const color = 'danger'
    const seatRowD = ['D1', 'D2', 'D3', 'D4', 'D5', 'D6'];
    const seatRowC = ['C1', 'C2', 'C3', 'C4', 'C5'];
    const seatRowB = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6'];

    const dispatch = useDispatch();

    const addSeatID = (event) => {
        console.log("Seat::::", event.target.id);

        const seatArray = selectedSeats;

        if (!seatArray.includes(event.target.id)) {
            seatArray.push(event.target.id);
            setSelectedSeats([...seatArray]);
        } else if (seatArray.includes(event.target.id)) {
            //seatArray.splice(event.target.id,1);
            console.log("UpdatedArray: ", seatArray);
            const indexToRemove = seatArray.indexOf(event.target.id);
            seatArray.splice(indexToRemove, 1);
            setSelectedSeats([...seatArray]);
        }

        console.log("SeatIDs", selectedSeats);
        console.log("Seat Array:::", seatArray);

    }

    useEffect(()=>{
        console.log("Level03",seats);
        setSelectedSeats(seats);
    },[seats])


    useEffect(() => {
        const selectedSeatsInRowD = seatRowD.map((seat, index) => {
            if (selectedSeats.includes(seat)) {
                return (
                    <button key={index} id={seat} onClick={addSeatID} style={{ backgroundColor: "blue" }}>{seat}</button>
                )
            } else {
                return (
                    <button key={index} id={seat} onClick={addSeatID} >{seat}</button>
                )
            }
        })

        const selectedSeatsInRowC = seatRowC.map((seat, index) => {
            if (selectedSeats.includes(seat)) {
                return (
                    <button key={index} id={seat} onClick={addSeatID} style={{ backgroundColor: "blue" }}>{seat}</button>
                )
            } else {
                return (
                    <button key={index} id={seat} onClick={addSeatID} >{seat}</button>
                )
            }
        })
        const selectedSeatsInRowB = seatRowB.map((seat, index) => {
            if (selectedSeats.includes(seat)) {
                return (
                    <button key={index} id={seat} onClick={addSeatID} style={{ backgroundColor: "blue" }}>{seat}</button>
                )
            } else {
                return (
                    <button key={index} id={seat} onClick={addSeatID} >{seat}</button>
                )
            }
        })
        setSelectedSeatElementsInRowD(selectedSeatsInRowD);
        setSelectedSeatElementsInRowC(selectedSeatsInRowC);
        setSelectedSeatElementsInRowB(selectedSeatsInRowB);

        const seatIdString = selectedSeats.join(',');
        dispatch(setSeatIDs({ seatIdString }))

    }, [selectedSeats])

    // const setSelectedSeatsIntoStore = () => {
    //     const seatIdString = selectedSeats.join(',');
      
    //     // console.log("JJ",seatIdString);
    //     // dispatch(setSeatIDs({ seatIdString }))

    //     axios.post('http://localhost:5014/api/Token/gettoken',seatIdString,{
    //         headers:{
    //           'Accept':'*/*',
    //           'Content-Type':'application/json',
              
    //         }
    //       })
    //           .then(response => {
    //             // Set session cookie in the browser
    //             const token  = response.data;
    //             localStorage.setItem('token',token.data);
    //             console.log(localStorage)
    //           })
    //           .catch(error => {
    //             console.error('Error creating session:', error);
    //           });
    // }

    return (
        <>
            <CContainer>
                <CRow>
                    <CCol></CCol>
                    <CCol>
                        {selectedSeatElementsInRowD}
                    </CCol>
                    <CCol></CCol>
                </CRow>
                <CRow>
                    <CCol>

                    </CCol>
                    <CCol>
                        {selectedSeatElementsInRowC}
                    </CCol>
                    <CCol>

                    </CCol>
                </CRow>
                <CRow>
                    <CCol>

                    </CCol>
                    <CCol>
                        {selectedSeatElementsInRowB}
                    </CCol>
                    <CCol>

                    </CCol>
                </CRow>
            </CContainer>

        </>
    )
}

Theater.propTypes = {
    seats: PropType.array
  }

export default Theater;