import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { _id, name, price, description, img } = service;
  return (
    <div className="service pb-3">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5>Price: ${price}</h5>
      <p>{description}</p>
      <Link to={`/booking/${_id}`}>
        <Button variant="outline-success">Book {name}</Button>
      </Link>
    </div>
  );
};

export default Service;
