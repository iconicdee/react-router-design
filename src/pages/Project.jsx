import React from 'react'
import MemePage from './MemePage'
import WindowTrackerContainer from './WindowTrackerContainer'
import Tenzies from './Tenzies';
import AssemblyEndGame from './AssemblyEndGame';

const Project = () => {
  return (
    <div className='project'>
        <WindowTrackerContainer/>
        <MemePage/>
        
        <Tenzies/>
        <AssemblyEndGame/>
    </div>
  )
}

export default Project
