import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Player } from './core/utils';
import { players } from './core/shuffler';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ padding: 20 }}>
        <img src={logo} className="App-logo" alt="logo" />
        {
          players.map(
            (player: Player) => (
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <p style={{ textDecoration: 'underline' }}>
                  {player.name}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'start' }}>
                  {
                    Object.keys(player.jobMap)
                      .map((job: string) =>
                        <span>
                          {
                            `${job}: ${player.jobMap[job]},`
                          }
                        </span>)
                  }
                </div>
              </div>
            )
          )}
      </header>
    </div >
  );
}

export default App;
