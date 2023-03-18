import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import JoinRoomPage from './JoinRoomPage/JoinRoomPage';
import RoomPage from './RoomPage/RoomPage';
import IntroductionPage from './IntroductionPage/IntroductionPage';
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/join-room'>
          <JoinRoomPage />
      </Route>
      <Route path='/room'>
        <RoomPage />
      </Route>
      <Route path='/'>
        <IntroductionPage />
      </Route>
    </Switch>
  

    </BrowserRouter>
  );
}

export default App;
