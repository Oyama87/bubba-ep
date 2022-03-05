import React, { useState, Fragment } from 'react';
import './App.css';
import { Player } from './typeDefinitions/utils';
import { memberPool } from './core/data/index';
import { CharacterTabComponent } from './UI-Components/CharacterTab.component';

function App() {
  const [partyMembers, setPartyMembers] = useState<Player[]>([]);

  return (
    <div className="App">
      <header className="App-header" style={{ padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            width: '35%'
          }}>
            {
              memberPool.map((p: Player) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <CharacterTabComponent
                    key={p.name}
                    player={p}
                    role="MNK"
                    assigned={partyMembers.includes(p)}
                    add={() => setPartyMembers([...partyMembers, p])}
                    remove={() => setPartyMembers(partyMembers.filter((plr: Player) => plr.name !== p.name))}
                  />
                </div>
              ))
            }
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            width: '15%'
          }}>
            {
              partyMembers.map((p: Player) => (
                <div>{p.name}</div>

              ))
            }
          </div>
        </div>
      </header>
    </div >
  );
}

export default App;
