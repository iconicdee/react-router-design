import React, { useState } from 'react'
import WindowTracker from './WindowTracker';

const WindowTrackerContainer = () => {
    const [show,setShow] = useState(true)
  return (
    <div className='main-window'>
        <button onClick={()=>setShow(prev=> !prev)} className='window-button'>Toggle Window Tracker</button>
        {show ? <WindowTracker/> : null}
    </div>
  )
}

export default WindowTrackerContainer;
