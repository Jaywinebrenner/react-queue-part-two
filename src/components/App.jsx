import React from 'react';
import TicketList from './TicketList';
import Header from './Header';
import ExampleList from './ExampleList';
import PictureList from './PictureList';
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';


// import MyStyledComponent from './MyStyledComponent';


function App(){
  var cWholeApp = {
    textAlign: 'center',
    backgroundColor: 'lightgray',
    height: '2000px'
  };
  return (
    <div style = {cWholeApp}>
      <Header/>
        <Switch>
          <Route exact path='/' component={TicketList} />
          <Route path='/newticket' component={NewTicketForm} />
        </Switch>
      <TicketList/>
      <ExampleList/>
      <PictureList/>
    </div>
  );
}

export default App;
