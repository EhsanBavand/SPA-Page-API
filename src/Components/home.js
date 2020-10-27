import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  // Save All Datat that I fetch and Save in resualt
  const [alldata, setalldata] = useState(false);
  useEffect(() => {
    fetch("https://tt-sherpa-backend.herokuapp.com/events")
      .then((response) => response.json())
      .then((data) => setalldata(data));
  }, []);
  var result = [];
  for (let i in alldata) result.push(alldata[i]);
  // console.log(result);

  return (
    // Use Bootstrap coding
    <Container>
      <Row>
        <Col>
          <div className="cardHero">
            <Row>
              <div className="cardHeroInner">Companies</div>
            </Row>
            <Row>
              <div className="cardHeroInner">Members</div>
            </Row>
            <Row>
              <div className="cardHeroInner">Event</div>
            </Row>
            <Row>
              <div className="cardHeroInner">Studio</div>
            </Row>
          </div>
        </Col>
        <Col>
          <header className="App-header">
            <h1>MarketPlace</h1>
          </header>
        </Col>
        <Col>
          <div className="profileLogin">
            <p>
              Profile <br /> Login
            </p>
          </div>
        </Col>
      </Row>
      <Row className="rowHero full-width">
        <Col>
          <p className="heroFont">
            <strong>Hero</strong> <br />
            Content Image
          </p>
        </Col>
      </Row>
      <Row className="rowCards">
        <Col>
          <NavLink to="/details">
            <div>
              {result.map((item) => (
                <div key={item.id}>
                  <div className="homeMainCard">
                    <div className="homeCard ">
                      <div> {item.logo}</div>
                      <div> {item.title}</div>
                      <div>{item.detail}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
