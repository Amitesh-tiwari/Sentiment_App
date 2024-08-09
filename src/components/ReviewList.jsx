import React, {useState} from "react";
import sentiment from '../assets/reviews_data.json'

const ReviewList = () => {  
    const [reviews, setReviews] = React.useState([]);  
  
    React.useEffect(() => {  
      // Fetch reviews from the JSON file  
      fetch(sentiment)  
        .then((response) => response.json())  
        .then((data) => setReviews(data))  
        .catch((error) => console.error('Error fetching reviews:', error));  
    }, []);  
  
    return (  
      <div>  
        <h2>Reviews</h2>  
        {reviews.map((review, index) => (  
          <ReviewHighlighter key={index} review={review} />  
        ))}  
      </div>  
    );  
  };

export default ReviewList;