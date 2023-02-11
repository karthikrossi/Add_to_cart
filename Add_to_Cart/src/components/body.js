
import { useState } from "react";
import list from "../sampledata.json";
import ProductCard from "./card";
import { Row, Col, Container } from 'react-bootstrap'
const Body = ({handleClick}) => {
  return (
    <Container>
      <Row>
      {list.map((item) => (
        <Col>
        <ProductCard key={item.id} item={item} handleClick={handleClick} />
        </Col>
      ))}
      </Row>
    </Container>
  )
}

export default Body