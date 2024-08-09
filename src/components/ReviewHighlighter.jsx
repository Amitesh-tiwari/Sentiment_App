import React from 'react';
import Tooltip from './Tooltip';

const sentimentColors = {  
    positive: 'green',  
    negative: 'red',  
    neutral: 'gray'  
  };  
  
  const ReviewHighlighter = ({ review }) => {  
    return (  
      <div>  
        <h4>{review.title}</h4>  
        <p>  
          {review.sentences.map((sentence, index) => {  
            const sentiment = review.analytics[index].sentiment;  
            const color = sentimentColors[sentiment] || 'black';  
            return (  
              <span key={index} style={{ color }} title={review.analytics[index].topic}>  
                {sentence}   
              </span>  
            );  
          })}  
        </p>  
      </div>  
    );  
  };
export default ReviewHighlighter;