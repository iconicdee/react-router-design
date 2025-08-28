import React, { useEffect, useState } from 'react'

const WindowTracker = () => {
    const [windowWidth,setWindowWidth] = useState(window.innerWidth)
    useEffect(()=>{
        function watchWindowWidth(){
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWindowWidth)

        return function() {
            window.removeEventListener("resize",watchWindowWidth)
        }
    },[])
  return (
    <p className='window-text'>Window width: {windowWidth}</p>
  )
}

export default WindowTracker
