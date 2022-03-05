import React, { useState, Fragment } from 'react';
import { CharacterTabProps } from '../typeDefinitions/characters.types'

export const CharacterTabComponent = ({ player, role, assigned, add, remove }: CharacterTabProps) => {
  // const [isAssigned, setIsAssigned] = useState<boolean>(false);

  return (
    <div style={{
      borderRadius: 10,
      fontSize: 16,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 10,
      backgroundColor: `${assigned ? 'red' : 'blue'}`,
      // paddingTop: 15,
      // paddingBottom: 15
      padding: 25
    }}
      className='character-tab-container'>
      <div>Character: {player.name}</div>
      <div>Job: {role}</div>
      <div>Assigned: {`${assigned}`}</div>
      <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
        <button style={{
          fontSize: 18,
          padding: 0,
          marginTop: 10
        }} onClick={() => {
          add && add();
        }}>Add</button>
        <button style={{
          fontSize: 18,
          padding: 0,
          marginTop: 10
        }} onClick={() => {
          remove && remove();
        }}>Remove</button>
      </div>
    </div>
  )

}
