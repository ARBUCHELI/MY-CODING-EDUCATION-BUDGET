import Transactions from '../features/transactions/Transactions';
import Budgets from '../features/budgets/Budgets';
import React from 'react';
import codecademy from '../images/codecademy.jpg';
import edx from '../images/edx.jpg';
import freecodecamp from '../images/freecodecamp.jpg';
import udacity from '../images/udacity.jpg';
import coursera from '../images/coursera.jpg';
import linkedin from '../images/linkedin.jpg';
import mitx from '../images/mitx.jpg';
import udemy from '../images/udemy.jpg';
import harvardx from '../images/harvardx.jpg';

function App() {
  return (
    <div className="App" style={{backgroundColor: "#95b5df"}}>
      <header className="App-header">
        <h1>My Coding Education Budget</h1>
        <div className="row">
          <div className="column">
            <img src={codecademy} alt="codecademy" style={{width:"100%"}} className="icon-image"/>
          </div>
          <div className="column">
            <img src={edx} alt="codecademy" style={{width:"100%"}} className="icon-image"/>
          </div>
          <div className="column">
            <img src={freecodecamp} alt="codecademy" style={{width:"100%"}} className="icon-image"/>
          </div>
          <div className="column">
            <img src={udacity} alt="codecademy" style={{width:"100%"}} className="icon-image"/>
          </div>
          <div className="column">
            <img src={coursera} alt="codecademy" style={{width:"100%"}} className="icon-image"/>
          </div>
          <div className="column">
            <img src={linkedin} alt="codecademy" style={{width:"100%"}} className="icon-image"/>
          </div>
          <div className="column">
            <img src={mitx} alt="codecademy" style={{width:"100%"}} className="icon-image"/>
          </div>
          <div className="column">
            <img src={udemy} alt="codecademy" style={{width:"100%"}} className="icon-image"/>
          </div>
          <div className="column">
            <img src={harvardx} alt="codecademy" style={{width:"100%"}} className="icon-image"/>
          </div>
        </div>
        <Budgets />
        <Transactions />
      </header>
    </div>
  );
}

export default App;
