 import React, {Component} from 'react';
 import css from './Statistics.module.css';
  
class Statistics extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positivePercentage: 0,
      };
     

      render(){
        return (
            <div>
            <ul className={css.list}>
            <li>
              Good: <span>{this.state.good}</span>
            </li>
            <li>
              Neutral: <span>{this.state.neutral}</span>
            </li>
            <li>
              Bad: <span>{this.state.bad}</span>
            </li>
      
            <li>
              Total: <span>{this.state.total}</span>
            </li>
            <li >
              Positive feedback: <span>{this.state.positivePercentage}%</span>
            </li>
          </ul>
          </div>
        )
      }
    }
    export default Statistics;

// Statistics.prototype = {
//   good: PropTypes.number,
//   neutral: PropTypes.number,
//   bad: PropTypes.number,
//   total: PropTypes.number,
//   positive: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// };
