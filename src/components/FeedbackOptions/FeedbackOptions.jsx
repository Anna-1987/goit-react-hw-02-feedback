import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) =>(
console.log(Object.keys(options)),
    
    <div className={css.btn__block}>
      {Object.keys(options).map(option =>(
          <button
          key={option}
          type="button"
          name={option}
          className={css.btn}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}

    </div>
);

export default FeedbackOptions;