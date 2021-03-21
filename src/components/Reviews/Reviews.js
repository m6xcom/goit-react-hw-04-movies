import React from "react";
import PropTypes from "prop-types";
import style from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <h3 className={style.authorTitle}>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};
