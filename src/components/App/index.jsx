import React from "react";
import TournamentsList from "../TournamentsList";
import UserTournaments from "../UserTournaments";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="app">
        <div className="main">
          <div className="main__block main__block--left">
            <TournamentsList />
          </div>
          <div className="main__block main__block--right">
            <UserTournaments />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
