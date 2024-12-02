import React from 'react'
import PropType from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSelectedMovie } from '../action'
import axios from 'axios'
import {
    CCard,
    CCardBody,
    CCardImage,
    CCardTitle,
    CCardText,
    CListGroup,
    CListGroupItem,
    CCardLink,
    CNavLink,
    CButton

} from '@coreui/react'

const Card = (props) => {
    const { id, imdbRating, screeningDate, title, genres } = props.movie;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const movieHandler = () => {
        console.log("butterfly",id);
        axios
        .post('http://localhost:5014/api/Token/gettoken',id,{
        headers: {
            'Content-Type': 'application/json'
            }
        })
        .then((res)=>{
            console.log("Nitro",res);
            const token = res.data;
            localStorage.setItem('token', token.data);
            dispatch(setSelectedMovie({ id }))
            navigate(`/movie/${title}`);
        })
        .catch((err)=>{
            console.log(err);
        })

    }

    return (
        <>
            <CCard style={{ width: '18rem' }}>
                <CCardImage orientation="top" src={''} />
                {/* <CNavItem> */}
                    <CButton onClick={movieHandler}>
                        <CCardBody>
                            <CCardTitle>{title}</CCardTitle>
                            <CCardText>
                                Some quick example text to build on the card title and make up the bulk of the cards content.
                            </CCardText>
                        </CCardBody>
                    </CButton>
                {/* </CNavItem> */}
                <CListGroup flush>
                    <CListGroupItem><b>Genre: </b>{genres}</CListGroupItem>
                    <CListGroupItem><b>IMDB: </b>{imdbRating}</CListGroupItem>
                    <CListGroupItem><b>In Cinemas: </b>{screeningDate}</CListGroupItem>
                </CListGroup>
                <CCardBody>
                    <CCardLink href="#">Buy Tickets</CCardLink>
                    <CCardLink href="#">Watch Trailer</CCardLink>
                </CCardBody>
            </CCard>
        </>
    )
}

Card.propTypes = {
    // id:PropType.number,
    // imdbRating:PropType.number,
    // screeningDate:PropType.instanceOf(Date),
    // title:PropType.string
    movie: PropType.object

}

export default Card;