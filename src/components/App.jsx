import React, { Component } from 'react';
import {Statistics} from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Section } from './Sectoin/Section';
import { Notification } from './Notification/Notificanion';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
      updateCount = (state) => {
        this.setState(prevState => ({ [state]: prevState[state] + 1 }));
        
      } 

      countTotalFeedback = () => 
      Object.values(this.state).reduce((acc, value) => acc + value, 0);
       
      countPositiveFeedbackPercentage = () => {
        return this.countTotalFeedback()
          ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)
          : '0';
      };

  render(){
    const { good, neutral, bad} = this.state;
    return (
      <div
        style={{
          width: '420px',
          display: 'block',
          textAlign: 'center',
          fontSize: '32px',
          color: '#010101',
          margin: '0 auto',
        }}
      >
         <Section title="Please leave feedback">
         <FeedbackOptions 
            onLeaveFeedback={this.updateCount} 
            options={this.state}
            />
         </Section>

         {this.countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
};



