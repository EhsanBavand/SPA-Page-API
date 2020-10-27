
import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios';



const Details = () => {
    // Fetch Metting
    const [allMetting, setallMetting] = useState(false);

    useEffect(() => {
        fetch('https://tt-sherpa-backend.herokuapp.com/events/1/meetings')
            .then(response => response.json())
            .then(data => setallMetting(data));
    }
        , [])

    var result = [];
    for (let i in allMetting)
        result.push(allMetting[i]);
    console.log(result);

    // Fetch Id Number 1
    const url = 'https://tt-sherpa-backend.herokuapp.com/events/1';
    const [product, setProduct] = useState(null);
    let contentLogo = null;
    let contentTitle = null;
    let contentDetail = null;

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setProduct(response.data)
            })

    }, [url])
    if (product) {
        contentLogo = <div>{product.logo}</div>;
        contentTitle = <div><h5 className="text-2xl font-bold mb-3">{product.title}</h5></div>;
        contentDetail = <div className="font-bold text-xl mb-3">{product.detail}</div>;
    }
    return (
        // Bootstrap for UI
        <Container>
            <Row className="test1">
                <Col>
                    {/* <NavLink to="/">
                        <div className="marcketPlaceHeader"  >MarcketPlace</div>
                    </NavLink> */}
                    <NavLink className="marcketPlaceHeader" to="/">
                        MarcketPlace
                    </NavLink>
                </Col>
            </Row>
            <Row className="test2">
                <Col>
                    <div className="details">{contentDetail}</div>
                </Col>
                <Col></Col>
                <Col>
                    <div className="profileLoginDetails">
                        <p>Profile <br /> Login</p>
                    </div>
                </Col>
            </Row>
            <Row className="test3">
                <div className="cardDetails">
                    <Row>
                        <div className="cardInnerDetailsLogo">{contentLogo}</div>
                    </Row>
                    <Row>
                        <div className="cardInnerDetailsEvent">{contentTitle}</div>
                    </Row>
                </div>
            </Row>
            <Row className="test4">
                <Col>
                    <div className="cardCompanies">
                        <div className="cardCompaniesInner">Companies</div>
                        <div className="cardCompaniesInner">Members</div>
                        <div className="cardCompaniesInner">Studio</div>
                        <div className="cardCompaniesInner"> Event</div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col >
                    <div>
                        <h2 className="featuredMeeting">featured Meeting</h2>
                        {result.map(item => (
                            <div className="meetingMainCard" key={item.id}>
                                <div className="meetingCard">
                                    <div className="firstMettingCard">  Start:  {item.start}</div>
                                    <div className="secondMettingCard"> End: {item.end}</div>
                                    <div className="thirdMettingCard">Description: {item.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Details;
