import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './component/Header/Header';
import CampaignList from "./component/CampaignList/CampaignList";

function App() {
  return (
    <React.Fragment>
        <Header></Header>
      <Router>
          <Route path='/' exact strict render={() => {
              return (<CampaignList/>)
          }}/>
      </Router>
    </React.Fragment>
  );
}

export default App;
