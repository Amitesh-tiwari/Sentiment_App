import React from 'react';
import { useState } from 'react';
import ReviewHighlighter from './ReviewHighlighter';

const Tooltip = ({ text }) => {  
    return (  
      <span className="tooltip">  
        {text}  
      </span>  
    );  
  };  
  
  // Add CSS for tooltip styling  
  const style = `  
  .tooltip {  
    visibility: hidden;  
    background-color: black;  
    color: #fff;  
    text-align: center;  
    border-radius: 5px;  
    padding: 5px;  
    z-index: 1;  
    position: absolute;  
  }  
  
  span:hover .tooltip {  
    visibility: visible;  
  }  
  `;
export default Tooltip;